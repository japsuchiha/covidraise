import flask
import sqlite3
from flask import request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = flask.Flask(__name__)
api = Api(app)
CORS(app)
app.config["DEBUG"] = True

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

# cursor.execute("DROP TABLE anime")
# cursor.execute("DROP TABLE temp")

create_table = "CREATE TABLE IF NOT EXISTS logs (id text, pass text)"
cursor.execute(create_table)

connection.commit()
connection.close()

class Main(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT * FROM logs"
        result = cursor.execute(query)
        logs = []
        for row in result:
            logs.append({'name':row[0],'likes':row[1]})
        connection.close()
        return {'users': logs}
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id',
        type = str,
        required = True,
        help = "Dont leave blank"
        )

        parser.add_argument('pass',
        type = str,
        required = True,
        help = "Don't leave blank"
        )

        data = parser.parse_args()
        print(data)
        print(data['id'])
        login = {
            'username': data['id'],
            'password': data['pass']
        }
        
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "INSERT INTO logs VALUES (?, ?)"
        cursor.execute(query,(login['username'], login['password']))

        connection.commit()
        connection.close()

        return login, 201
    
api.add_resource(Main, '/login')

if __name__ == "__main__":
    app.run()