import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("AH20232CP1");

let isConnected = false;

async function connectDB() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
}

export async function obtenerTodosLosDocumentos() {
    try {
        await connectDB();
        const documentos = await db.collection("Documentos").find().toArray();
        return documentos;
    } catch (error) {
        console.error("Error al obtener todos los documentos:", error);
        throw new Error("Error al obtener todos los documentos: " + error.message);
    }
}

export async function obtenerClientes() {
    try {
        await connectDB();
        const clientes = await db.collection("Clientes").find().toArray();
        return clientes;
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        throw new Error("Error al obtener clientes: " + error.message);
    }
}

export async function crearCliente(cliente) {
    try {
        await connectDB();
        const nuevoCliente = {
            nombre: cliente.nombre,
            foto: cliente.foto,
            descripcion: cliente.descripcion,
        };
        const result = await db.collection("Clientes").insertOne(nuevoCliente);
        return result;
    } catch (error) {
        console.error("Error al crear cliente:", error);
        throw new Error("Error al crear cliente: " + error.message);
    }
}

export async function obtenerDocumentosPorCliente(clienteId) {
    try {
        await connectDB();
        const documentos = await db.collection("Documentos").find({ cliente_id: new ObjectId(clienteId) }).toArray();
        return documentos;
    } catch (error) {
        console.error("Error al obtener documentos del cliente:", error);
        throw new Error("Error al obtener documentos del cliente: " + error.message);
    }
}

export async function crearDocumento(clienteId, documento) {
    try {
        await connectDB();
        const nuevoDocumento = {
            nombre: documento.nombre,
            descripcion: documento.descripcion,
            seccion: documento.seccion,
            fuente: documento.fuente,
            imagen: documento.imagen,
            cliente_id: new ObjectId(clienteId)
        };
        const result = await db.collection("Documentos").insertOne(nuevoDocumento);
        return result;
    } catch (error) {
        console.error("Error al crear documento:", error);
        throw new Error("Error al crear documento: " + error.message);
    }
}

async function getDocumentos(filtros = {}) {
    try {
        await connectDB();

        const filtropormongo = { eliminado: { $ne: true } };

        if (filtros.seccion) {
            filtropormongo.seccion = { $eq: filtros.seccion };
        }
        if (filtros.nombre) {
            filtropormongo.nombre = { $regex: filtros.nombre, $options: "i" };
        }

        const documentos = await db.collection("Documentos").find(filtropormongo).toArray();
        return documentos;
    } catch (error) {
        console.error("Error al obtener documentos:", error);
        throw new Error("Error al obtener documentos: " + error.message);
    }
}

async function getDocumentoId(id_ingresado) {
    try {
        await connectDB();

        const documento = await db.collection("Documentos").findOne({ _id: new ObjectId(id_ingresado) });
        return documento;
    } catch (error) {
        console.error("Error al obtener documento por ID:", error);
        throw new Error("Error al obtener documento por ID: " + error.message);
    }
}

async function agregarDocumento(documento) {
    try {
        await connectDB();

        await db.collection("Documentos").insertOne(documento);
        return documento;
    } catch (error) {
        console.error("Error al agregar documento:", error);
        throw new Error("Error al agregar documento: " + error.message);
    }
}

async function eliminarDocumento(id_ingresado) {
    try {
        await connectDB();

        await db.collection("Documentos").updateOne(
            { _id: new ObjectId(id_ingresado) },
            { $set: { eliminado: true } }
        );
        return id_ingresado;
    } catch (error) {
        console.error("Error al eliminar documento:", error);
        throw new Error("Error al eliminar documento: " + error.message);
    }
}

async function modificarDocumento(id_ingresado, documentoActualizado) {
    try {
        await connectDB();

        await db.collection("Documentos").replaceOne(
            { _id: new ObjectId(id_ingresado) },
            documentoActualizado
        );
        return documentoActualizado;
    } catch (error) {
        console.error("Error al modificar documento:", error);
        throw new Error("Error al modificar documento: " + error.message);
    }
}

async function actualizarDocumento(id, documentoActualizado) {
    try {
        await connectDB();

        const result = await db.collection("Documentos").updateOne(
            { _id: new ObjectId(id) },
            { $set: documentoActualizado }
        );
        return result;
    } catch (error) {
        console.error("Error al actualizar documento:", error);
        throw new Error("Error al actualizar documento: " + error.message);
    }
}

export {
    getDocumentoId,
    getDocumentos,
    agregarDocumento,
    eliminarDocumento,
    modificarDocumento,
    actualizarDocumento,
};
