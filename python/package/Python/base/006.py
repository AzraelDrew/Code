import requests
import pandas
import json
import time
head = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:56.0) Gecko/20100101 Firefox/56.0'}
Cookie = {'Cookie':'_T_WM=f6d406d777aafb7ed7671865d1f83799; SUB=_2A2504yPYDeRhGeNO6VMY9SvEyTuIHXVULE2QrDV6PUJbkdAKLW_YkW0b_QKWV_mSPrmPv7aZsGtGMxBDlQ..; SUHB=079ja78HU_LZCb; SCF=AmqC1lSo0254S3K0WtBQVQwXfOSQ7ivbLAOSCObPteJy5JckO3l0ZH7pSTuid_JRXlWylgjTetdZzQcModbM4A4.; H5:PWA:UID=1; M_WEIBOCN_PARAMS=featurecode%3D20000320%26oid%3D4160547165300149%26luicode%3D20000061%26lfid%3D4160547165300149; H5_INDEX=0_all; H5_INDEX_TITLE=%E6%8C%96%E6%8E%98%E6%9C%BA%E5%A4%A7%E7%8E%8B%E5%AD%90'}
url = 'https://m.weibo.cn/comments/hotflow?id=4480311318712712&mid=4480311318712712&max_id_type=0'
html = requests.get(url, headers=head, cookies=Cookie)
ii = 1
while html.status_code == 200:
    ii = ii + 1
    url_next = 'https://m.weibo.cn/api/comments/show?id=4160547165300149&page=' + str(ii)

    try:
        for jj in range(1, len(html.json()['data'])):
            data1 = [(html.json()['data'][0]['id'],
                      html.json()['data'][jj]['user']['screen_name'],
                      html.json()['data'][jj]['created_at'],
                      html.json()['data'][jj]['source'],
                      html.json()['data'][jj]['user']['id'],
                      html.json()['data'][jj]['user']['profile_url'],
                      html.json()['data'][jj]['user']['profile_image_url'],
                      html.json()['data'][jj]['text'])]
            data2 = pandas.DataFrame(data1, columns=['莫名id', '评论者昵称', '评论时间', '手机版本', '用户id', '评论者主页', '评论者头像', '评论内容'])
            data2.to_csv('D:/Python/weibo2.csv', header=False, index=False,
                         mode='a+')  # 写入csv文件,'a+'是追加模式

    except:

        None

    time.sleep(2)

    html = requests.get(url_next, cookies=Cookie, headers=head)