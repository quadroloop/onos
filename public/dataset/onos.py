import sys
import urllib.request
import datetime

args = sys.argv

date_now = datetime.datetime.now()


latest_infrared_image = "http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif"


def help():
  print("Onos CLI is a tool to update content for the web application.")
  print("\nUsage:\n")
  print("-s : Create snapshot of the current weather info. \n MSTAT Infrared Satellite images from DOST PAGASA / HIMAWARI-8 Satellite")
  print("-ds : Document Storm; create documentation of a storm in occurence")


def splash():
  print("==============================")
  print(" ONOS v1 | Content CLI")
  print("==============================")

  if len(args) == 1:
    help()

def currentWeatherSnapshot():
  print("Preparing current weather snapshot...")
  print(date_now)

  # print('Fetching latest image from: '+ latest_infrared_image)
  # image_name = "onos-snapshot-"+str(date_now).replace(" ","-")+".gif";
  # urllib.request.urlretrieve(latest_infrared_image, image_name)
  # print("snapshot iamge saved!")

# show splash
splash()

# show help after argument provided:
if "-h" in args:
  help()

# trigger current weather snapshot
if "-s" in args:
  currentWeatherSnapshot()


