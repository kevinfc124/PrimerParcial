import * as documentoService from "../services/documentos.service.js";
import * as documentoView from "../views/documentos.view.js";

const getDocumentos = (req, res) => {
    const filtros = {
        seccion: req.query.seccion
    };

    documentoService.getDocumentos(filtros)
        .then(documentos => {
            res.send(documentoView.crearPagina("Listado de documentos educativos", documentoView.crearListadoDocumentos(documentos)));
        })
        .catch(err => {
            res.send(documentoView.crearPagina("Error al cargar documentos", `<p>${err}</p>`));
        });
}

export {
    getDocumentos,
}
