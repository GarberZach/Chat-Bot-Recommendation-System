# query_form provides the necessary functions for building a query from user's input
import json

from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import pandas as pd

es = Elasticsearch("http://localhost:9200")


def build_query(attribute_form):
    # compile all the attributes into the must list (maybe add must not list)
    must_list = []

    # build individual queries to go in the big query
    for a in attribute_form:
        must_list.append(build_atomic_query(a['attribute'], a['match'], a['boolv'], a['phrase'], a['range'], a['val']))

    query = {"bool": {"must": must_list}}
    print(query)
    return query


# everything is just a match phrase or range at this point so focused on those
def build_atomic_query(attribute, match, boolv, phrase, range, val):
    atomic_query = None
    if match:
        atomic_query = {"match": {
            attribute: {
                "query": phrase,
                "fuzziness": 2,
                "prefix_length": len(phrase)
            }
        }
        }
    elif boolv:
        atomic_query = {"match": {
            attribute: {
                "query": phrase,
            }
        }
        }
    elif range:
        atomic_query = {"range": {
            attribute: {
                "gte": val - 0.2,
                "lte": val + 0.2}
        }
        }

    return atomic_query


attributes1 = [
    {
        "attribute": "danceability",
        "match": False,
        "boolv": False,
        "phrase": None,
        "range": True,
        "val": 0.6
    },
    {
        "attribute": "energy",
        "match": False,
        "boolv": False,
        "phrase": None,
        "range": True,
        "val": 0.5
    },
    {
        "attribute": "explicit",
        "match": False,
        "boolv": True,
        "phrase": True,
        "range": False,
        "val": None
    }
]

attributes2 = [
    {
        "attribute": "artists",
        "match": True,
        "boolv": False,
        "phrase": "dua lipa",
        "range": False,
        "val": None
    }
]



# q = build_query(attributes2)

#resp = es.search(index="songs", query=q, size=100)
#print(json.dumps(resp.body, indent=1))
