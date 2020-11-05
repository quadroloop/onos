import sys
import urllib.request
import datetime
import json
import uuid
from time import sleep
import os


# dataset directory
dataset_directory = (r'./')

# dataset
dataset_file = "./dataset.json"
dataset_info_file = "./dataset_info.json"

db = json.load(open(dataset_file))
db_ifno = json.load(open(dataset_info_file))

# meteopilipinas / PAGASA / HIMAWARI-8 image files:
img_colored = "http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif"
img_irbig = "http://src.meteopilipinas.gov.ph/repo/himawari/24hour/irbig/latestHIM_irbig.gif"
img_vis = "http://src.meteopilipinas.gov.ph/repo/himawari/24hour/visbig/latestHIM_visbig.gif"

image_dir = "/dataset/"


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


def writetoDB(data):

  update_info = {
    "last_updated": str(date_now),
    "dataset_size": os.path.getsize(dataset_file),
  }

  with open(dataset_file, 'w') as outfile:
    json.dump(data, outfile)
    print(CBEIGE+"SUCCESS: Dataset Updated!"+CEND)

  # update dataset stats:

  with open(dataset_info_file, 'w') as info_file:
    json.dump(update_info, info_file)


def help():
  print(CGREY+"Onos CLI is a tool to update content for the web application."+CEND)
  print(CITALIC+CBLUE+"\nUsage:\n"+CEND)
  print(CYELLOW+"-s"+CEND+" : Create snapshot of the current weather info. \n     Satellite images from DOST PAGASA / HIMAWARI-8 Satellite")
  print(CYELLOW+"-ds"+CEND+" : Document Event. Create documentation for a major weather event")
  print(CYELLOW+"--backup"+CEND+" : Create a backup for the dataset directory")
  print(CYELLOW+"--purge-dataset"+CEND+" : Reset dataset.")


def splash():
  print(CBLUE+"=============================="+CEND)
  print(CGREEN2+" ONOS v1 | Content CLI"+CEND)
  print(CBLUE+"=============================="+CEND)

  if len(args) == 1:
    help()

def removeImages():
  files = os.listdir(dataset_directory)

  for images in files:
    if images.endswith(".gif"):
        os.remove(os.path.join(dataset_directory, images))
        print(CRED2+"Deleted file: "+CEND+str(images))



def purgeDataset():
  print(CRED2+"Warning: purging the dataset is not reversible and will remove all recorded data."+CEND)
  print("If you only wish to backup the dataset you must use '--backup' instead.")

  purge_confirmation = input(CGREEN2+"Do you wish to continue? (y/n): "+CEND)

  if purge_confirmation == "y":
    print(CRED2+"purging in 5s... you can still cancel this using CTRL+Z"+CEND)
    sleep(5)
    # purging dataset..
    removeImages()
    writetoDB([])
    print(CBEIGE+"SUCCESS: dataset has been deleted."+CEND)
  else:
    print("Dataset purge cancelled!")


def fetchImage(url,file_name):
  print('Fetching latest image from: '+ url)
  urllib.request.urlretrieve(url, file_name)
  print("snapshot image saved ==> "+CGREEN2+file_name+CEND)


def createBackUp():
    print(CBLUE2+"Running back up process..."+CEND)
    backup_name = "onos-backup-"+str(date_now.date())+".zip"
    os.system("zip -r ../backup/"+backup_name+" .")
    print(CYELLOW2+"=========================="+CEND)
    print(CBEIGE+"Success: Back up process complete!"+CEND)
    print(CBEIGE+"Back up archive directory is located in:"+CEND)
    print(CBOLD+CBLUE2+"/backup/"+backup_name+CEND)



def currentWeatherSnapshot():

  snapshot_id =  str(uuid.uuid4());


  print(CYELLOW2+"Preparing current weather snapshot..."+CEND)
  print(CYELLOW+"Date: "+CEND+str(date_now.date()))

  colored = "cl-"+snapshot_id+"-"+str(date_now).replace(" ","-")+".gif";
  ir = "ir-"+snapshot_id+"-"+str(date_now).replace(" ","-")+".gif";
  vis = "vis-"+snapshot_id+"-"+str(date_now).replace(" ","-")+".gif";

  fetch_file_names = [colored,ir,vis]
  image_url_set = [img_colored,img_irbig,img_vis]

  # fetch images from and save it.
  for index, img in enumerate(image_url_set):
    fetchImage(img,fetch_file_names[index])

  # object is based on the data spec of meteopilipinas repository
  snapshot_data = {
    "id": snapshot_id,
    "type": "snapshot",
    "date": str(date_now.date()),
    "time": str(date_now.time()),
    "title": "Weather data collection",
    "img_colored": image_dir+colored,
    "img_ir": image_dir+ir,
    "img_vis": image_dir+vis,
    "weather_info": []
  }

  db.append(snapshot_data)

  # write to DB
  writetoDB(db)



def documentEvent():
  print(CYELLOW2+"Starting Documentation:"+CEND)
  print(CYELLOW2+"Provide the following information:"+CEND)

  # collect data:

  international_name = input(CBLUE2+"International Name: "+CEND)
  event_type_jma = input(CBLUE2+"Event Type (JMA Scale): "+CEND)
  event_type_sshws = input(CBLUE2+"Event Type (SSHWS): "+CEND)
  local_name = input(CBLUE2+"Local Name: "+CEND)
  date_formed = input(CBLUE2+"Date Formed: "+CEND)
  date_dissipated = input(CBLUE2+"Date Dissipated: "+CEND)
  highest_winds = input(CBLUE2+"Highest Winds (km/h): "+CEND)
  lowest_pressure = input(CBLUE2+"Lowest Pressure (hPa): "+CEND)
  fatalities = input(CBLUE2+"Fatalities: "+CEND)
  damage = input(CBLUE2+"Damage: "+CEND)
  areas_affected = input(CBLUE2+"Areas Affected: "+CEND)
  event_sources = input(CBLUE2+"Wikipedia aritcle slug: "+CEND)

  weather_event_id =  str(uuid.uuid4());


  print(CYELLOW2+"Preparing Weather event documentation..."+CEND)
  print(CYELLOW+"Date: "+CEND+str(date_now.date()))

  colored = "cl-"+weather_event_id+"-"+str(date_now).replace(" ","-")+".gif";
  ir = "ir-"+weather_event_id+"-"+str(date_now).replace(" ","-")+".gif";
  vis = "vis-"+weather_event_id+"-"+str(date_now).replace(" ","-")+".gif";

  fetch_file_names = [colored,ir,vis]
  image_url_set = [img_colored,img_irbig,img_vis]

  # fetch images from and save it.
  for index, img in enumerate(image_url_set):
    fetchImage(img,fetch_file_names[index])

  # object is based on the data spec of meteopilipinas repository
  weather_event_data = {
    "id": weather_event_id,
    "type": "event",
    "date": str(date_now.date()),
    "time": str(date_now.time()),
    "title": "Major Weather Event",
    "img_colored": image_dir+colored,
    "img_ir": image_dir+ir,
    "img_vis": image_dir+vis,
    "international_name": international_name,
    "event_type_jma": event_type_jma,
    "event_type_sshws": event_type_sshws,
    "local_name": local_name,
    "date_formed": date_formed,
    "date_dissipated": date_dissipated,
    "highest_winds": highest_winds,
    "lowest_pressure": lowest_pressure,
    "fatalities": fatalities,
    "damage": damage,
    "areas_affected": areas_affected,
    "wikipedia_article_slug": event_sources,
    "weather_info": []
  }

  db.append(weather_event_data)

  # write to DB
  writetoDB(db)


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

# purge dataset
if "--purge-dataset" in args:
   purgeDataset()

# create backup
if "--backup" in args:
  createBackUp()


