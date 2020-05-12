import requests
from urllib.parse import urlencode
from pyquery import PyQuery as pq
from imageio import imread
user_agent = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/0.7.0 MicroMessenger/6.3.9 Language/zh_CN webview/0'

url = 'https://m.weibo.cn/comments/hotflow?id=4480347246941560&mid=4480347246941560&max_id_type=0'

response = requests.get(url)


json = response.json()

import jsonpath
screen_name = jsonpath.jsonpath(json,'$..screen_name')
description = jsonpath.jsonpath(json,'$..description')
gender = jsonpath.jsonpath(json,'$..gender')
created_at = jsonpath.jsonpath(json,'$..created_at')
text = jsonpath.jsonpath(json,'$..text')
profile_url = jsonpath.jsonpath(json,'$..profile_url')
image = jsonpath.jsonpath(json,'$..profile_image_url')
import pandas as pd
data = {'screen_name':screen_name,'description':description,'gender':gender,'created_at':created_at,'text':text,'profile_url':profile_url,'image':image}
print(data)
frame=pd.DataFrame.from_dict(data, orient='index')
  #当报错数据需要长度一致使用
frame = frame.transpose()
print(frame)
frame.to_csv('./weibo.csv',index=True,encoding='utf_8')
frame=str(frame["text"])

# print(frame['text'])

import re
txtlist = []
for i in frame:
    text = re.sub('<.+>','',i)
    txtlist.append(text)
text = "".join(txtlist)
print(text)
import jieba
wordlist = jieba.cut(text,cut_all=True)
word_space_split = " ".join(wordlist)
import matplotlib.pyplot as plt
from wordcloud import WordCloud,ImageColorGenerator
import PIL.Image as Image
import numpy as np
coloring = np.array(Image.open)
photo=imread("D:/Python/wordcloud/dt.png")
my_wordcloud = WordCloud(mask=photo,background_color="white",max_words=2000,max_font_size=60,
                         random_state=42,scale=2,font_path='D:/Python/wordcloud/mzd.ttf').generate(word_space_split)

plt.imshow(my_wordcloud)
plt.axis("off")
plt.show()
my_wordcloud.to_file("grwordcloud.png")

import os

base_path = 'headImages'
if not os.path.exists(base_path):
    os.mkdir(base_path)
import urllib.request

for i in frame:
    name = getattr(i, 'screen_name')
    url = getattr(i, 'image')
    filename = os.path.join(base_path, name + '.jpg')
    img_file = urllib.request.urlretrieve(url, filename)
    print(img_file)


