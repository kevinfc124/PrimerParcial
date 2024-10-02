import { Router } from "express";
import {
    obtenerClientesController,
    crearClienteController,
    obtenerDocumentosPorClienteController,
    obtenerDocumentosController,
    crearDocumentoController,
    getDocumentoIdController,
    agregarDocumentoController,
    modificarDocumentoController,
    eliminarDocumentoController,
    actualizarDocumentoController
} from "../controllers/documentos.controller.js";

const router = Router();

// Rutas para clientes
router.get("/clientes", obtenerClientesController);
router.post("/clientes", crearClienteController);
router.get("/clientes/documentos", obtenerDocumentosController);
router.get("/clientes/:clienteId/documentos", obtenerDocumentosPorClienteController);
router.post("/clientes/:clienteId/documentos", crearDocumentoController);

// Rutas para documentos
router.get("/documentos/:id", getDocumentoIdController);
router.post("/documentos", agregarDocumentoController);
router.get("/documentos", obtenerDocumentosController);
router.put("/documentos/:id", modificarDocumentoController);
router.patch("/documentos/:id", actualizarDocumentoController);
router.delete("/documentos/:id", eliminarDocumentoController);

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
}

router.use(errorHandler);

export default router;
