__author__ = 'gebruiker'

from bs4 import BeautifulSoup

import requests

#url = input("geef website zonder de http:// ")
#www.kvk.nl/zoek/?q=%22fetch!%22&partialfields=(-actief:0)&site=handelsregister&start=0
#https://server.db.kvk.nl/TST-BIN/FU/TSWS001@?BUTT=556138370000
#r  = requests.get("https://www.kvk.nl/zoek/?q=%22fetch!%22&partialfields=(-actief:0)&site=handelsregister&start=0")

#data = r.text
#print(data)
soup = BeautifulSoup(open("zoeken.htm"))
lichaam = (soup.body)
table = soup.find('div')
links = table.find_all(class_="content")
print(links)
print(len(lichaam.contents))
for tag in lichaam.find_all('li'):
    print(tag.children)

#for link in soup.find_all('ul'):
    #print(link.contents)
    #print(link.get('class'))
    #print(link.children)
