import requests
import json
import re
import jieba
import pandas as pd
import pynlpir
from imageio import imread
import  wordcloud
import matplotlib.pyplot as plt
import csv
import numpy as np


# 爬取微博评论写入weibo_comment.txt
def get_comment(weibo_id, url, headers, number):
    count = 0
    fp = open("./data/weibo_comment_" + str(weibo_id) + ".txt", "a", encoding="utf8")
    while count < number:
        if count == 0:
            print('是第一组')
            try:
                url = url + weibo_id + '&mid=' + weibo_id + '&max_id_type=0'
                web_data = requests.get(url, headers=headers)
                js_con = web_data.json()
                max_id = js_con['data']['max_id']
                print(max_id)
                comments_list = js_con['data']['data']
                for commment_item in comments_list:
                    comment = commment_item["text"]
                    label_filter = re.compile(r'</?\w+[^>]*>', re.S)
                    comment = re.sub(label_filter, '', comment)
                    fp.write(comment)
                    count += 1
                    print("已获取" + str(count) + "条评论。")
            except Exception as e:
                print(str(count) + "遇到异常")
                continue
        else:
            print('不是是第一组')
            try:
                url = url + weibo_id + 'max_id=' + str(max_id) + '&max_id_type=0'
                web_data = requests.get(url, headers=headers)
                js_con = web_data.json()
                max_id = js_con['data']['max_id']
                comments_list = js_con['data']['data']
                for commment_item in comments_list:
                    comment = commment_item["text"]
                    label_filter = re.compile(r'</?\w+[^>]*>', re.S)
                    comment = re.sub(label_filter, '', comment)
                    fp.write(comment)
                    count += 1
                    print("已获取" + str(count) + "条评论。")
            except Exception as e:
                print(str(count) + "遇到异常")
                continue
    fp.close()
if __name__ == "__main__":
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    }
    url = 'https://m.weibo.cn/comments/hotflow?id='
    weibo_id = '4481076062036690'  # 微博id
    number = 2  # 爬取评论量
    get_comment(weibo_id, url, headers, number)
# test = open('weibo_comment_'+str(weibo_id)+'.txt',encoding='utf-8', errors='ignore').read().replace('\n','')
# # seq_list=jieba.cut(test,cut_all=True)
# # print(seq_list) #<generator object Tokenizer.cut at 0x0000026EB6F0CD58>
# # print(list(seq_list))
# #
# # csvFile = open("./data2.csv",'w',newline='',encoding='utf-8')
# # writer = csv.writer(csvFile)
# # csvRow = []
# #
# # f = open('weibo_comment_'+str(weibo_id)+'.txt','r',encoding='utf-8')
# # for line in f:
# #     csvRow = line.split()
# #     writer.writerow(csvRow)
# # f.close()
# # csvFile.close()
Test = open('./data/weibo_comment_'+str(weibo_id)+'.txt',encoding='utf-8', errors='ignore').read().replace('\n','')
print(Test)
pynlpir.open()
Test0=pynlpir.segment(Test,pos_tagging=False)
txt = " ".join(Test0)
print(Test0)
photo=imread("D:/Python/wordcloud/dt.png")
words=[]
year_words=[]
Test=year_words.extend(pynlpir.segment(Test,pos_names='parent',pos_english=False))
for j in range(len(year_words)):
    ls_year_words=list(year_words[j])
    words.append(ls_year_words)
df_words=pd.DataFrame(words,columns=["词汇","词性"])
df_words.to_csv("news.csv")
print(df_words.head(50))
print(df_words.index.size)
wc = wordcloud.WordCloud(font_path = "D:/Python/wordcloud/mzd.ttf",width = 2000, height = 1000,background_color = "white",mask=photo,font_step=2,max_words=1000,min_font_size=6).generate(txt)
wc.to_file("D:/Python/wordcloud/WordCloud4.png")
pynlpir.close()
plt.imshow(wc)
plt.axis('off')
plt.show()