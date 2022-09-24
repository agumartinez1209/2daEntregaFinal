import admin from "firebase-admin"
import config from '../config.js'


admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: "https://daentrega-6aff6.firebaseio.com"
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
        try {
            const doc = this.coleccion.doc(`${id}`);
            const item = await doc.get();
            const response = item.data();

            console.log(response)
        } catch (error) {
            
        }
    }

    async listarAll() {
        try {
            const querySnapshot = await this.coleccion.get()
            let docs = querySnapshot.docs;

            const response = docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(response)
        } catch (error) {
            
        }
    }

    async guardar(nuevoElem) {
        const doc = this.coleccion.doc(`${id}`);
    }

    async actualizar(nuevoElem) {
        const doc = this.coleccion.doc(`${id}`);
            const item = await doc.update({nuevoElem});
            console.log('actualizado', item)
    }

    async borrar(id) {
        const doc = this.coleccion.doc(`${id}`);
            const item = await doc.delete();
            console.log('registro borrado', item)
    }

    async borrarAll() {
        const querySnapshot = await this.coleccion.get();
    querySnapshot.docs.forEach(async (snapshot) => {
      await snapshot.ref.delete();
    });
    }

    async desconectar() {
    }
}

export default ContenedorFirebase