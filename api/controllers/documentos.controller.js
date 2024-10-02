import {
    obtenerClientes,
    crearCliente,
    obtenerDocumentosPorCliente,
    obtenerTodosLosDocumentos,
    crearDocumento,
    getDocumentos,
    agregarDocumento,
    eliminarDocumento,
    modificarDocumento,
    getDocumentoId,
    actualizarDocumento
} from "../../services/documentos.service.js";

export const obtenerDocumentosController = async (req, res) => {
    const clienteId = req.params.clienteId;

    try {
        if (clienteId) {
            const documentos = await obtenerDocumentosPorCliente(clienteId);
            res.status(200).json(documentos);
        } else {
            const documentos = await obtenerTodosLosDocumentos();
            res.status(200).json(documentos);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerClientesController = async (req, res) => {
    try {
        const clientes = await obtenerClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const crearClienteController = async (req, res) => {
    try {
        const nuevoCliente = req.body;
        const result = await crearCliente(nuevoCliente);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerDocumentosPorClienteController = async (req, res) => {
    try {
        const clienteId = req.params.clienteId;
        const documentos = await obtenerDocumentosPorCliente(clienteId);
        res.status(200).json(documentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const crearDocumentoController = async (req, res) => {
    try {
        const clienteId = req.params.clienteId;
        const nuevoDocumento = req.body;
        const result = await crearDocumento(clienteId, nuevoDocumento);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDocumentoIdController = async (req, res) => {
    try {
        const documentoId = req.params.id;
        const documento = await getDocumentoId(documentoId);
        if (!documento) {
            res.status(404).json({ error: "Documento no encontrado" });
        } else {
            res.status(200).json(documento);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarDocumentoController = async (req, res) => {
    try {
        const nuevoDocumento = req.body;
        const result = await agregarDocumento(nuevoDocumento);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const modificarDocumentoController = async (req, res) => {
    try {
        const documentoId = req.params.id;
        const documentoActualizado = req.body;
        const result = await modificarDocumento(documentoId, documentoActualizado);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarDocumentoController = async (req, res) => {
    try {
        const documentoId = req.params.id;
        const result = await eliminarDocumento(documentoId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarDocumentoController = async (req, res) => {
    try {
        const documentoId = req.params.id;
        const documentoActualizado = req.body;
        const result = await actualizarDocumento(documentoId, documentoActualizado);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
