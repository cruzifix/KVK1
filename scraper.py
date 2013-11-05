__author__ = 'Bill'

from lxml import html
import requests
import urllib

r = urllib.request.urlopen('https://server.db.kvk.nl/')
print(r.read())


page = requests.get('https://server.db.kvk.nl/TST-BIN/FU/TSWS001@?BUTT=370799510000')
tree = html.fromstring(page.text)
page.status_code
#This will create a list of buyers:
buyers = tree.xpath('////td[@class="tabelrij"]/text()')
#This will create a list of prices
prices = tree.xpath('//span[@class="item-price"]/text()')
print('rij: ', buyers)
print('data', prices)

print(page)
#/html/body/div/table[2]/tbody/tr[1]
#/html/body/div[4]/span
#/html/body/div[4]/div
#'//div[@title="buyer-name"]/text()'
#/html/body/div/table[2]/tbody/tr[1]
#/html/body/div/table[2]/tbody/tr[1]/td[2]