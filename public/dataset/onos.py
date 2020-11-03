import sys
import urllib.request
import datetime
import json
import uuid

# dataset
dataset_file = "./dataset.json"
db = json.load(open(dataset_file))


# text style variables
CEND      = '\33[0m'
CBOLD     = '\33[1m'
CITALIC   = '\33[3m'
CURL      = '\33[4m'
CBLINK    = '\33[5m'
CBLINK2   = '\33[6m'
CSELECTED = '\33[7m'

CBLACK  = '\33[30m'
CRED    = '\33[31m'
CGREEN  = '\33[32m'
CYELLOW = '\33[33m'
CBLUE   = '\33[34m'
CVIOLET = '\33[35m'
CBEIGE  = '\33[36m'
CWHITE  = '\33[37m'

CBLACKBG  = '\33[40m'
CREDBG    = '\33[41m'
CGREENBG  = '\33[42m'
CYELLOWBG = '\33[43m'
CBLUEBG   = '\33[44m'
CVIOLETBG = '\33[45m'
CBEIGEBG  = '\33[46m'
CWHITEBG  = '\33[47m'

CGREY    = '\33[90m'
CRED2    = '\33[91m'
CGREEN2  = '\33[92m'
CYELLOW2 = '\33[93m'
CBLUE2   = '\33[94m'
CVIOLET2 = '\33[95m'
CBEIGE2  = '\33[96m'
CWHITE2  = '\33[97m'

CGREYBG    = '\33[100m'
CREDBG2    = '\33[101m'
CGREENBG2  = '\33[102m'
CYELLOWBG2 = '\33[103m'
CBLUEBG2   = '\33[104m'
CVIOLETBG2 = '\33[105m'
CBEIGEBG2  = '\33[106m'
CWHITEBG2  = '\33[107m'

args = sys.argv

date_now = datetime.datetime.now()


latest_infrared_image = "http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif"


def help():
  print(CGREY+"Onos CLI is a tool to update content for the web application."+CEND)
  print(CITALIC+CBLUE+"\nUsage:\n"+CEND)
  print(CYELLOW+"-s"+CEND+" : Create snapshot of the current weather info. \n     MSTAT Infrared Satellite images from DOST PAGASA / HIMAWARI-8 Satellite")
  print(CYELLOW+"-ds"+CEND+" : Document Storm; create documentation of a storm in occurence")


def splash():
  print(CBLUE+"=============================="+CEND)
  print(CGREEN2+" ONOS v1 | Content CLI"+CEND)
  print(CBLUE+"=============================="+CEND)

  if len(args) == 1:
    help()

def currentWeatherSnapshot():
  print(CYELLOW2+"Preparing current weather snapshot..."+CEND)
  print(CYELLOW+"Date: "+CEND+str(date_now.date()))

  image_name = "onos-snapshot-"+str(date_now).replace(" ","-")+".gif";

  # object is based on the data spec of meteopilipinas repository
  snapshot_data = {
    "id": str(uuid.uuid4()),
    "type": "snapshot",
    "date": str(date_now.date()),
    "time": str(date_now.time()),
    "title": "Weather data collection",

    "weather_info": []
  }

  db.append(snapshot_data)

  print(db)


  # print('Fetching latest image from: '+ latest_infrared_image)
  # urllib.request.urlretrieve(latest_infrared_image, image_name)
  # print("snapshot image saved!")

def documentEvent():
  print(CYELLOW2+"Stating Documentation:"+CEND)

  event_name = input("Event Name: ")
  print(event_name)

# show splash
splash()

# show help after argument provided:
if "-h" in args:
  help()

# trigger current weather snapshot
if "-s" in args:
  currentWeatherSnapshot()

# trigger documentation of significant event
if "-ds" in args:
  documentEvent()


