from flask import Flask, jsonify, request #Del módulo flask importar la clase Flask y los métodos jsonify, request
from flask_cors import CORS #Del módulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask (__name__) #Crear el objeto app de la clase Flask
CORS(app) #Módulo CORS es para que permita acceder desde el front al back

#Configuro la base de datos, con el nombre del usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/agencia'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app) #Crea el objeto db de la clase SQLAlchemy
ma = Marshmallow(app) #Crea el objeto ma de la clase Marshmallow

#Defino las tablas
class Vehiculo(db.Model): #La clase Vehiculo hereda de db.Model
    id = db.Column (db.Integer, primary_key=True)
    marca = db.Column(db.String(40), nullable=False)
    modelo = db.Column(db.String(100), nullable=False)
    anio = db.Column(db.Integer, nullable=False)
    estado = db.Column(db.String(20), nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    imagen = db.Column(db.String(1000), nullable=False)
    def __init__ (self,marca,modelo,anio,estado,precio,imagen): #Creo el constructor de la clase
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.estado = estado
        self.precio = precio
        self.imagen = imagen

#Aquí crea todas las tablas
with app.app_context():
    db.create_all()

class VehiculoSchema(ma.Schema):
    class Meta:
        fields = ('id','marca','modelo','anio','estado','precio','imagen')

vehiculo_schema = VehiculoSchema() #El objeto vehiculo_schema es para traer un producto
vehiculos_schema = VehiculoSchema(many=True) #El objeto vehiculos_schema es para traer multiples registros de producto

#Crea los endpoint o rutas (json)
@app.route('/vehiculos', methods = ['GET'])
def get_Vehiculos():
    all_vehiculos = Vehiculo.query.all() #El método query.all() lo hereda de db.Model
    result = vehiculos_schema.dump(all_vehiculos) 
    #El método dump() lo hereda de ma.schema y trae todos los registros de la tabla
    return jsonify(result)

@app.route('/vehiculos/<id>', methods = ['GET'])
def get_vehiculo (id):
    vehiculo = Vehiculo.query.get(id)
    return vehiculo_schema.jsonify(vehiculo) 
    #Retorna el JSON de un producto recibido como parametro

@app.route('/vehiculos/<id>', methods = ['DELETE'])
def delete_vehiculo(id):
    vehiculo = Vehiculo.query.get(id)
    db.session.delete(vehiculo)
    db.session.commit() #Confirma el Delete
    return vehiculo_schema.jsonify(vehiculo) #Devuelve un json con el registro eliminado

@app.route('/vehiculos', methods = ['POST']) #Crea ruta o endpoint
def create_vehiculo():
    print(request.json) #request.json contiene el json que envio el cliente
    marca = request.json['marca']
    modelo = request.json['modelo']
    anio = request.json['anio']
    estado = request.json['estado']
    precio = request.json['precio']
    imagen = request.json['imagen']
    new_vehiculo = Vehiculo (marca,modelo,anio,estado,precio,imagen)
    db.session.add(new_vehiculo)
    db.session.commit() #Confirma el alta
    return vehiculo_schema.jsonify (new_vehiculo)

@app.route('/vehiculos/<id>', methods = ['PUT'])
def update_vehiculo (id):
    vehiculo = Vehiculo.query.get(id)

    vehiculo.marca = request.json['marca']
    vehiculo.modelo = request.json['modelo']
    vehiculo.anio = request.json['anio']
    vehiculo.estado = request.json['estado']
    vehiculo.precio = request.json['precio']
    vehiculo.imagen = request.json['imagen']

    db.session.commit() #Confirma el cambio
    return vehiculo_schema.jsonify(vehiculo) #Retorna un json con el vehiculo

#Programa Principal
if __name__ == '__main__':
    app.run (debug = True, port = 5000) #Ejecuta el servidor Flask en el puerto 5000
    