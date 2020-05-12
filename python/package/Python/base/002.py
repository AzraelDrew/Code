import pynlpir as pynlpir
import matplotlib.pyplot as plt
import  wordcloud
import jieba
import pandas as pd
from imageio import imread

Test = open('D:/Python/wordcloud/w2.txt',encoding='utf-8', errors='ignore').read().replace('\n','')
print(Test)
pynlpir.open()

Test0=pynlpir.segment(Test,pos_tagging=False)
txt = " ".join(Test0)
print(Test0)


photo=imread("D:/Python/wordcloud/dt.jpg")


words=[]
year="杨再恩"
year_words=[]
Test=year_words.extend(pynlpir.segment(Test,pos_names='parent',pos_english=False))
for j in range(len(year_words)):
    ls_year_words=list(year_words[j])
    ls_year_words.append(year)
    words.append(ls_year_words)
print(words[2:13])

df_words=pd.DataFrame(words,columns=["词汇","词性","姓名"])
print(df_words.head(20))
print(df_words.index.size)

wc = wordcloud.WordCloud(font_path = "D:/Python/wordcloud/mzd.ttf",\
width = 600, height = 400,\
background_color = "white",\
mask=photo,\
font_step=2,\
max_words=1000,\
min_font_size=6,\
stopwords={"依法"}).generate(txt)
#font_path这里要设置，否则中文会乱码
#width 生成图片宽度，默认400像素   height 生成图片高度，默认200像素
#mask 词云形状，默认None，即方形图
#background_color 图片背景颜色，默认黑色
#font_path 指定字体文件的路径，默认None
#font_step 指定字号步进间隔，默认1
#max_font_size 指定词云中最大的字体字号，默认None，根据高度自动调节
#min_font_size 指定词云中最小的字体字号，默认4号
#max_words 指定词云显示的最大单词数量，默认200
#stopwords={}指定词云的排除词列表，即不显示的单词列表

wc.to_file("D:/Python/wordcloud/WordCloud4.png")
#WordCloud类的常用方法
#generate(text) 由text文本生成词云
#to_file(filename) 将词云保存为名为filename的文件

pynlpir.close()

plt.imshow(wc)
plt.axis('off')
plt.show()

df_words['cut'] = df_words['词汇'].apply(lambda x : list(jieba.cut(x)))
print(df_words.head(20))

# # coding=utf-8
# from wordcloud import WordCloud
# import sys, cv2
#
# filename = sys.argv[1]
# mytext = open('D:/Python/wordcloud/news.txt', encoding='utf8').read()  # 打开文本
# wc1 = WordCloud(
#     background_color='Black',  # 背景色
#     width=2000,  # 宽度
#     height=1000,  # 高度
#     # font_path='STXINWEI.TTF',  # 字体文件，此处与py文件放在同一目录
#     margin=1  # 词语边缘距离
# )
# wc2 = wc1.generate(mytext)  # 绘制词云
#
# '''保存图片'''
# filename = '{}.png'.format(filename)
# wc2.to_file(filename)
#
# '''显示图片'''
#
# img = cv2.imread(filename)
# cv2.imshow('img', img)
# cv2.waitKe
# from matplotlib import pyplot as plt
#
# plt.rcParams['figure.dpi'] = 600  # 修改dpi
# plt.rcParams['savefig.dpi']=600   # 修改dpi
# plt.axis('off')
# plt.imshow(wc2)
# plt.savefig('{}.jpg'.format(filename))
# y(0)
