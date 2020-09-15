from pymongo import MongoClient
import pandas as pd
import io
import requests
import json
import datetime

def datainsert():
    # database connection
    connection = MongoClient('localhost', 27017)
    if 'covid' in connection.list_database_names():
        connection.drop_database('covid')
    database = connection['covid']

    # get and process data

    url3 = 'https://raw.githubusercontent.com/ulklc/covid19-timeseries/master/countryReport/raw/rawReport.csv'
    read_data = requests.get(url3).content
    df = pd.read_csv(io.StringIO(read_data.decode('utf-8')), error_bad_lines=False)
    columns=['countryName', 'death' , 'recovered','confirmed','region','day']
    data=df[columns]
    data['percentage of death'] = (data['death'] * 100) / data['confirmed']
    data['percentage of death'] = data['percentage of death'].fillna(0)
    data['percentage of recovered'] = (data['recovered'] * 100) / data['confirmed']
    data['percentage of recovered'] = data['percentage of recovered'].fillna(0)
    data['active Cases'] = data['confirmed'] - data['recovered'] - data['death']
    data['percentage of active case'] = data['active Cases'] * 100 / data['confirmed']
    data['percentage of active case'] = data['active Cases'].fillna(0)
    #create collection for cuntries
    collection = database['DATA']

    #inject data
    l1 = data['countryName'].unique().tolist()
    for i in l1:
        filt = data['countryName'] == i
        df_inter = data.loc[filt]
        result = df_inter.to_json(orient='index')
        parsed = json.loads(result)
        for j in parsed:
            collection.insert_one(parsed[j])
now = datetime.datetime.now()
current_time = now.strftime("%H:%M:%S")
if current_time == "00:00:00":
    datainsert()