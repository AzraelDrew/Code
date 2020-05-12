def get_tencent_data1():
    url = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_other"
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
    return history
print(get_tencent_data1())
