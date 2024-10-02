import express from "express";
import apiRoute from "./api/routes/documentos.routes.js";
import documentoRoutes from "./routes/documentos.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoute);

app.use('/', documentoRoutes);

app.listen(3333, () => {
    console.log("Servidor funcionando en el puerto 3333");
});
