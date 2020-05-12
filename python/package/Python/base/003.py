import requests
import json
from urllib.parse import urlencode
from pyquery import PyQuery as pq
import pynlpir as pynlpir
import matplotlib.pyplot as plt
import  wordcloud
import jieba
import pandas as pd
from imageio import imread

user_agent = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/0.7.0 MicroMessenger/6.3.9 Language/zh_CN webview/0'

url = 'https://m.weibo.cn/comments/hotflow?id=4480311318712712&mid=4480311318712712&max_id_type=0'
a=requests.get(url)
print(a.json())
b=a.json()
