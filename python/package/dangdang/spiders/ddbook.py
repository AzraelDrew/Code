# -*- coding: utf-8 -*-
import scrapy
from dangdang.items import DangdangItem
from scrapy.http import Request #Request对象表示一个HTTP请求由Spider生成，由Downloader执行

class DdSpider(scrapy.Spider):
    name = 'ddbook'
    allowed_domains = ['dangdang.com']
    start_urls = ['http://category.dangdang.com/pg1-cp01.03.38.00.00.00.html']

    def parse(self, response):#parse()用于处理响应，解析内容形成字典，发现新的URL爬取请求
        item=DangdangItem()
        item["title"]=response.xpath("//a[@name='itemlist-title']/@title").extract()
        item["link"]=response.xpath("//a[@name='itemlist-title']/@href").extract()
        item["comment"]=response.xpath("//a[@name='itemlist-review']/text()").extract()
        item["author"] = response.xpath("//a[@name='itemlist-author']/@title").extract()
        yield item
        for i in range(0,10):
            url = 'http://category.dangdang.com/pg'+str(i)+'-cp01.03.38.00.00.00.html'
            yield Request(url,callback=self.parse)