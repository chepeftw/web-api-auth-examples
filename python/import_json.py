from pymongo import MongoClient
import json
import sys

#Step 1: Connect to MongoDB - Note: Change connection string as needed
uri = "mongodb://db/" # Container
# uri = "mongodb://root:rootpassword@db/" # Container
# uri = "mongodb://root:rootpassword@127.0.0.1:27017/"
client = MongoClient(uri)

db=client.deezer

source_file = "/data/deezer_20200131_us_topk50.0.json"
if len(sys.argv) > 1:
    source_file = sys.argv[1]

collection_name = "top50us"
if len(sys.argv) > 2:
    collection_name = sys.argv[2]


collection = db[collection_name]
collection.drop()

with open(source_file) as f:
    file_data = json.load(f)  # load data from JSON to dict
    for k1, v1 in file_data.items():  # iterate over key-value pairs
        print('Doing something ... ' + k1)
        if k1 == "entities":
            for i in v1:  # iterate over key-value pairs
                print('- ' + str(i))
                i['rank'] = int(i['rank'])
                collection.insert_one(i)  # your collection object here

print('Done')