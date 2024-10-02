import express from "express";
import * as controllerDocumento from "../controllers/documentos.controller.js";

const route = express.Router();

route.get("/documentos", controllerDocumento.getDocumentos);

export default route;
