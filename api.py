
import os
import flask
import numpy
import cv2
import time
import json
import subprocess
from flask_cors import CORS
from flask import jsonify

from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

def serialize_doc(doc):
    """Convert MongoDB document to a JSON serializable format."""
    if "_id" in doc:
        doc["_id"] = str(doc["_id"])
    return doc

def fetch_from_collection(uri, db_name, collection_name, query={}, limit=0):
    try:
        client = MongoClient(uri)
        db = client[db_name]
        collection = db[collection_name]
        documents = list(collection.find(query).limit(limit))
        client.close()
        
        # Serialize each document using the custom serialize_doc function
        return [serialize_doc(doc) for doc in documents]
    except ConnectionFailure:
        print("Failed to connect to MongoDB, check your URI or network.")
        return jsonify({"error": "Connection failure"}), 500
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An error occurred"}), 500


secret = "ZVxO6EXfVtafAVDK"
username = "sophiewalden"

uri = "mongodb+srv://sophiewalden:ZVxO6EXfVtafAVDK@labdatabase.trvtdeo.mongodb.net/"
db_name = "Lab"
collection_name = "Publications"
query = {}
limit = 100

documents = fetch_from_collection(uri, db_name, collection_name, query, limit)

DEFAULT_APP_NAME = __name__

def create_app(name=DEFAULT_APP_NAME, 
               default_log_level="INFO"):

    app = flask.Flask(name)
    CORS(app)

    log_level = os.environ.get(f"{app.name.upper()}_LOG_LEVEL", default_log_level)
    app.logger.setLevel(log_level)

    app.logger.info(f"Creating App {name}...")

    @app.route("/get_publications")
    def get_publications():
        uri = "mongodb+srv://sophiewalden:ZVxO6EXfVtafAVDK@labdatabase.trvtdeo.mongodb.net/"
        db_name = "Lab"
        collection_name = "Publications"
        query = {}
        limit = 100

        documents = fetch_from_collection(uri, db_name, collection_name, query, limit)

        return documents
    

    
    @app.route("/get_staff")
    def get_staff():
        uri = "mongodb+srv://sophiewalden:ZVxO6EXfVtafAVDK@labdatabase.trvtdeo.mongodb.net/"
        db_name = "Lab"
        collection_name = "Staff"
        query = {}
        limit = 100

        documents = fetch_from_collection(uri, db_name, collection_name, query, limit)

        return documents


    return app



if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=2204,)
