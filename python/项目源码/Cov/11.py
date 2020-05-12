import time
from selenium.webdriver import Chrome, ChromeOptions
import requests
import pymysql
import time
import json
import traceback
import sys
from selenium.webdriver import Chrome, ChromeOptions

# 常规方法
import requests

url = "https://voice.baidu.com/act/virussearch/virussearch?from=osari_map&tab=0&infomore=1"
res = requests.get(url)
print(res.text)

option = ChromeOptions()
option.add_argument("--headless")  # 隐藏浏览器
option.add_argument("--no-sandbox")

browser = Chrome(options=option)
browser.get(url)
# print(browser.page_source)
but = browser.find_element_by_css_selector(
    '#ptab-0 > div > div.VirusHot_1-5-4_32AY4F.VirusHot_1-5-4_2RnRvg > section > div')
but.click()  # 点击展开
time.sleep(1)  # 等待1秒

c = browser.find_elements_by_xpath('//*[@id="ptab-0"]/div/div[2]/section/a/div/span[2]')
for i in c:
    print(i.text)

browser.close()
def get_conn():
    """
    :return: 连接，游标
    """
    # 创建连接
    conn = pymysql.connect(host="localhost",
                           user="root",
                           password="yznaisy",
                           db="yzn",
                           charset="utf8")
    # 创建游标
    cursor = conn.cursor()  # 执行完毕返回的结果集默认以元组显示
    return conn, cursor


def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()
def get_baidu_hot():
    option = ChromeOptions()
    option.add_argument("--headless")  # 隐藏浏览器
    option.add_argument("--no-sandbox")

    browser = Chrome(options=option)
    browser.get("https://voice.baidu.com/act/virussearch/virussearch?from=osari_map&tab=0&infomore=1")
    # print(browser.page_source)
    dl = browser.find_element_by_css_selector(
        '#ptab-0 > div > div.VirusHot_1-5-4_32AY4F.VirusHot_1-5-4_2RnRvg > section > div')
    dl.click()  # 点击展开
    time.sleep(1)  # 等待1秒

    c = browser.find_elements_by_xpath('//*[@id="ptab-0"]/div/div[2]/section/a/div/span[2]')
    context = [i.text for i in c]
    print(context)
    return context


def update_hotsearch():
    cursor = None
    conn = None
    try:
        context = get_baidu_hot()
        print(f"{time.asctime()}开始更新热搜数据")
        conn, cursor = get_conn()
        sql = "insert into hotsearch(dt,content) values(%s,%s)"
        ts = time.strftime("%Y-%m-%d %X")
        for i in context:
            cursor.execute(sql, (ts, i))  # 插入数据
        conn.commit()  # 提交事务保存数据1
        print(f"{time.asctime()}数据更新完毕")
    except:
        traceback.print_exc()
    finally:
        close_conn(conn, cursor)
update_hotsearch()