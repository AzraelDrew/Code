import traceback
import pandas as pd
import requests
import json
import time
import pymysql
# url="https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5"
# res = requests.get(url)
# print(res.text)
# d = json.loads(res.text)
# type(d["data"])
# data_all = json.loads(d["data"])
# print(type(data_all))
# print(data_all.keys())
# print(data_all["chinaDayList"])
# print(data_all["chinaDayAddList"])

# print(data_all["areaTree"][0]["name"])
# print(data_all["areaTree"][0]["today"])
# print(data_all["areaTree"][0]["total"])
# for i in data_all["areaTree"][0]["children"]:
#     print(i["name"])
from pymongo import cursor


def get_tencent_data():
    url = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5&other"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',}
    r = requests.get(url,headers)
    res = json.loads(r.text)     #json字符串转字典
    data_all = json.loads(res["data"])
    history = {}    #历史数据
    for i in data_all["chinaDayList"]:
        ds = "2020."+ i["date"]
        tup = time.strptime(ds,"%Y.%m.%d")
        ds = time.strftime("%Y-%m-%d",tup)    #改变事件格式，不然插入数据库会出错，数据库格式为datetime类型
        confirm = i["confirm"]
        suspect = i["suspect"]
        heal = i["heal"]
        dead = i["dead"]
        history[ds] = {"confirm":confirm,"suspect":suspect,"heal":heal,"dead":dead}
    for i in data_all["chinaDayAddList"]:
        ds = "2020."+ i["date"]
        tup = time.strptime(ds,"%Y.%m.%d")
        ds = time.strftime("%Y-%m-%d",tup)
        confirm = i["confirm"]
        suspect = i["suspect"]
        heal = i["heal"]
        dead = i["dead"]
        history[ds].update({"confirm_add":confirm,"suspect_add":suspect,"heal_add":heal,"dead_add":dead})
    details = []  #当日详细数据
    update_time = data_all["lastUpdateTime"]
    data_country = data_all["areaTree"] #list25个国家
    data_proveince = data_country[0]["children"]  #中国各省
    for pro_infos in data_proveince:
        province = pro_infos["name"]  #省名
        for city_infos in pro_infos["children"]:
            city = city_infos["name"]
            confirm = city_infos["total"]["confirm"]
            confirm_add = city_infos["today"]["confirm"]
            heal = city_infos["total"]["heal"]
            dead = city_infos["total"]["dead"]
            details.append([update_time,province,city,confirm,confirm_add,heal,dead])
            data= pd.DataFrame(details)
            data.to_csv("data.csv")
    return history, details
print(get_tencent_data())
# conn = pymysql.connect(host="127.0.0.1",user="root",password="yznaisy",db="yzn",port=3306)  #建立连接
# conn = pymysql.Connect(conn)
# # 自动确认commit True
# conn.autocommit(1)
# # 设置光标
# cursor = conn.cursor()
# df = pd.read_csv('stock.csv', encoding='gbk', usecols=[0, 1, 2, 3, 4, 5])
# cursor = conn.cursor()    #创建游标
# sql = "insert into history values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
# cursor.execute(sql,[time.strftime("%Y-%m-%d"), 1, 2, 3, 4, 5, 6, 7, 8])
# conn.commit()
# cursor.close()
# conn.close()
# sql="select * from history"
# cursor.execute(sql)
# res = cursor.fetchall()
# print(res)
# cursor.close()
# conn.close()
def get_conn():
    # 创建连接
    conn = pymysql.connect(host='localhost',
                           user='root',
                           password='yznaisy',
                           db='yzn',
                           port=3306,
                           charset='utf8')
    # 创建游标
    cursor = conn.cursor()
    return conn, cursor
def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()
def insert_history():
    """
    插入历史数据
    :return:
    """
    cursor = None
    conn = None
    try:
        dic = get_tencent_data()
        print(f"{time.asctime()}开始插入历史数据")
        conn,cursor = get_conn()
        sql = "insert into history values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        for k, v in dic.items():
            # item格式 {  ' 2020-01-13' :   {}'confirm:41 , suspect : 0 , heal : 0,  dead  :  1}  }
            cursor.execute(sql,[k,v.get("confirm"),v.get("confirm_add"),v.get("suspect"),v.get("suspect_add"),v.get("heal"),v.get("heal_add"),v.get("dead"),v.get("dead_add")])
        conn.commit()
        print(f"{time.asctime()}插入历史数据完毕")
    except:
        traceback.print_exc()
    finally:
        close_conn(conn,cursor)



print(insert_history())
# def update_details():
#     """
#     更新details表
#     :return:
#     """
#     cursor=None
#     conn=None
#     try:
#         li = get_tencent_data()[1] # 0是历史数据字典，1最新详细数据列表
#         conn,cursor = get_conn()
#         sql = "insert into details(update_time,province,city,confirm,comfirm_add,heal,dead) values(%s,%s,%s,%s,%s,%s,%s)"
#         sql_query = 'select %s=(select update_time from details order by id desc limit 1)'# 对比当前最大时间戳
#         cursor.execute(sql_query,li[0][0])
#         if not cursor.fetchone()[0]:
#             print(f"{time.asctime()}开始更新最新数据")
#             for item in li:
#                 cursor.execute(sql,item)
#             conn.commit() #提交事务
#             print(f"{time.asctime()}数据更新完毕")
#         else:
#             print(f"{time.asctime()}已是最新数据")
#     except:
#         traceback.print_exc()
#     finally:
#         close_conn(conn,cursor)
# print(update_details())