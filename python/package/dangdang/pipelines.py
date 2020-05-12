# -*- coding: utf-8 -*-
import pymysql
# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class DangdangPipeline(object):
    def process_item(self, item, spider):
        connect = pymysql.connect(host='localhost',user='root',password='yznaisy',db='yzn',port=3306)
        for i in range(0,len(item["title"])):
            title=item["title"][i]
            link=item["link"][i]
            comment=item["comment"][i]
            author = item["author"][i]
            #print(title+":"+link+":"+comment)
            sql="insert into book(title,link,comment,author) values('"+title+"','"+link+"','"+comment+"','"+author+"')"
            print(sql)
            try:
                connect.query(sql)
            except Exception as error:
                print(error)
        connect.close()
        return item
