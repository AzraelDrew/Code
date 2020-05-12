import csv
import pynlpir as pynlpir
import matplotlib.pyplot as plt
import  wordcloud
import jieba
import pandas as pd
from imageio import imread
csvFile = open("./data.csv",'w',newline='',encoding='utf-8')
writer = csv.writer(csvFile)
csvRow = []

f = open("D:/Python/wordcloud/w2.txt",'r',encoding='utf-8')
for line in f:
    csvRow = line.split()
    writer.writerow(csvRow)

f.close()
csvFile.close()
Test = open('data.csv',encoding='utf-8', errors='ignore').read().replace('\n','')
print(Test)
pynlpir.open()
Test0=pynlpir.segment(Test,pos_tagging=False)
txt = " ".join(Test0)
print(Test0)
photo=imread("D:/Python/wordcloud/dt.jpg")


words=[]
year_words=[]
Test=year_words.extend(pynlpir.segment(Test,pos_names='parent',pos_english=False))
for j in range(len(year_words)):
    ls_year_words=list(year_words[j])
    words.append(ls_year_words)

df_words=pd.DataFrame(words,columns=["词汇","词性"])
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

# df_words['cut'] = df_words['词汇'].apply(lambda x : list(jieba.cut(x)))
# print(df_words.head(20))