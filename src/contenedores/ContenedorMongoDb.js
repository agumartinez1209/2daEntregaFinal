import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            await this.coleccion.find({id : id});
        } catch (error) {
            console.log(error)
        }
    }

    async listarAll() {
        try {
            await this.coleccion.find({});
          } catch (error) {
            console.log(error)
          }
    }

    async guardar(nuevoElem) {
        try {
            await this.coleccion.create({nuevoElem})
        } catch (error) {
            console.log(error)
        }
    }

    async actualizar(nuevoElem) {
        try {
            await this.coleccion.updateOne({id : id},{$set: {nuevoElem}})
        } catch (error) {
            console.log(error)
        }
    }

    async borrar(id) {
        try {
            await this.coleccion.deleteOne({id : id});
        } catch (error) {
            console.log(error)
        }
    }

    async borrarAll() {
        try {
            await this.coleccion.deleteMany({ });
        } catch (error) {
            console.log(error)
        }
    }
}

export default ContenedorMongoDb