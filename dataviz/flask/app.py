from flask import Flask, jsonify

from flask_pymongo import PyMongo
from flask_cors import cross_origin,CORS


app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'covid'
app.config["MONGO_URI"] = "mongodb://localhost:27017/covid"
mongo = PyMongo(app)




@app.route('/', methods=['GET'])
@cross_origin()
def index():
    data = mongo.db.DATA.find({})
    Country_list = []
    date=[]
    for i in data :
        if i['countryName'] not in Country_list:
            Country_list.append(i['countryName'])
        if i['day'] not in date :
            date.append(i['day'])


    regions=['Europe','Asia','Americas','Africa','Oceania']
    today=date[-1]

    d=dict()
    for i in regions:
        name = mongo.db.DATA.find({'day': today,'region':i})
        confirmed = []
        death = []
        recovered = []
       
        for q in name :
            if q['region']==i :
                confirmed.append(q['confirmed'])
                death.append(q['death'])
                recovered.append(q['recovered'])
        d[i]={'confirmed':sum(confirmed) ,
              'death' : sum(death),
               'recovered' : sum(recovered)
              }
    return (jsonify({'Country_list': Country_list,
                     'regions': regions,
                     'last_day': d,
                     'today': today}))


@app.route('/<Country>/', methods=['GET'])
@cross_origin()
def hello_world(Country):
    name = mongo.db.DATA.find({'countryName': Country})
    confirmed = []
    deaths = []
    recovered = []
    p_deaths = list()
    p_recovered = []
    date=list()
    for i in name:
        date.append( i['day'])
        deaths.append(i['death'])
        confirmed.append( i['confirmed'])
        recovered.append(i['recovered'])
        p_deaths.append(i['percentage of death'])
        p_recovered.append(i['percentage of recovered'])
    last_day_values = {'pourcenttage_of_deaths': p_deaths[-1],
                       'pourcenttage_of_recovered': p_recovered[-1],
                       'pourcenttage_of_active_cases': 100 - (p_deaths[-1] + p_recovered[-1]),
                       'Confirmed': confirmed[-1],
                       'Recovered': recovered[-1],
                       'Deaths': deaths[-1]
                      }
    today = date[-1]

    output = jsonify({'confirmed': confirmed, 'Deaths': deaths,
                      'last_day_values': last_day_values,
                       'recovered': recovered, 'Date': date , 'today':today})

    return output


if __name__ == '__main__':
    app.run(debug=True)
