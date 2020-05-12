# -*- coding: utf-8 -*-
# @Time : 2020/3/10 15:05
# @Author : 青空
# @File : 微博评论获取.py
import requests
import re
import jieba
from imageio import imread
from wordcloud import WordCloud
import pandas as pd
import json

url = 'https://m.weibo.cn/comments/hotflow?id=4480698218387550&mid=4480698218387550&max_id_type=0'
response = requests.get(url).json()
# json = response.text.json()
data = response.get('data').get('data')
print(data)
import jsonpath
screen_name = jsonpath.jsonpath(response,'$..screen_name')
description = jsonpath.jsonpath(response,'$..description')
gender = jsonpath.jsonpath(response,'$..gender')
created_at = jsonpath.jsonpath(response,'$..created_at')
text = jsonpath.jsonpath(response,'$..text')
profile_url = jsonpath.jsonpath(response,'$..profile_url')
image = jsonpath.jsonpath(response,'$..profile_image_url')
data_base={'screen_name':screen_name,'description':description,'gender':gender,'created_at':created_at,'text':text,'profile_url':profile_url,'image':image}
data_base=pd.DataFrame(data_base, orient='index')
print(data_base)
texts = []
path = r'D:\blog'
# print(data)
a = '<.*>?'
for i in range(len(data)):
    text = data[i].get('text')
    text = re.sub(a, '', text)
    name = data[i].get('user').get('screen_name')
    img_url = data[i].get('user').get('profile_image_url')
    texts.append(text)
    # print('%s\t%s'%(name,img_url))
    img = requests.get(img_url)
    with open(r'%s\%s.jpg' % (path, name), 'wb') as f:
        f.write(img.content)
texts = ''.join(texts)
# print(texts)
word_list = jieba.cut(texts, cut_all=True)
word_space_split = ' '.join(word_list)
# print(word_space_split)
font ="D:/Python/wordcloud/mzd.ttf"
pic = imread("D:/Python/wordcloud/dt.png")
word_cloud = WordCloud(font_path=font, mask=pic,max_words=500, max_font_size=200, background_color='white',
                       colormap='Reds_r', scale=15.5)
word_cloud.generate(word_space_split)
word_cloud.to_file(r'{}\词云.jpg'.format(path))
