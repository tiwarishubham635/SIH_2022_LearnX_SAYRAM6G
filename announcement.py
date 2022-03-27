import requests
from prettyprinter import pprint
from bs4 import BeautifulSoup
import time
import json


def scrape():
    URL = 'https://www.imsnsit.org/imsnsit/notifications.php'
    page = requests.get(URL)  # sends HTTP Response
    # print(page.content)

    soup = BeautifulSoup(page.content, 'html.parser')  # sends HTML data
    # pprint(soup)

    # finds td tags with given class
    results = soup.find_all('td', class_='list-data-focus')

    circulars = []
    for announcement in results:
        a_tag = announcement.find('a')
        b_tag = announcement.find('b')  # link = a_tag['href']

        lis = []
        if a_tag is not None and b_tag is not None:
            #circulars[a_tag.text] = b_tag.text
            lis.append(a_tag.text)
            lis.append(b_tag.text)
        else:
            lis.append(b_tag.text)
            lis.append('Published By: CONCERNED DEPARTMENT')
        circulars.append(lis)
    json_object = json.dumps(circulars)  # converts list to a json object

    # Writing to json file
    with open("client/src/components/Announcements/Data/announcements.json", "w") as outfile:
        outfile.write(json_object)


while True:
    scrape()
    print("Running Again")
    time.sleep(300)
