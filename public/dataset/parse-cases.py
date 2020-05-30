import csv
import json

# Open the CSV
f = open( 'doh-data-drop.csv', 'rU' )
# set key names, for each column
# reader = csv.DictReader( f, fieldnames =
# ( "hfhudcode",
#   "id",
#   "cfname",
#   "updateddate",
#   "addeddate",
#   "reportdate",
#   "icu_v",
#   "icu_o",
#   "isolbed_v",
#   "isolbed_o",
#   "beds_ward_v",
#   "beds_ward_o",
#   "mechvent_v",
#   "mechvent_o",
#   "region",
#   "region_psgc",
#   "province",
#   "province_psgc",
#   "city_mun",
#   "city_mun_psgc",
#   "north_coord",
#   "east_coord"
#  ))

reader = csv.DictReader(f)

# Parse the CSV into JSON
out = json.dumps( [ row for row in reader ] )


# Save the JSON


f = open( './cases.json', 'w')
f.write(out)
print "JSON saved!"
