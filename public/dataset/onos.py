import sys


def splash():
  print("==============================")
  print(" ONOS v1 | Content CLI")
  print("==============================")

def help():
  print("Onos CLI is a tool to update content for the web application.")
  print("Usage:")
  print("-s : Create snapshot of the current weather info.")

splash()

args = sys.argv

if "-h" in args:
  help()


