import express from "express";
import { getIndex, getDetalhes, getDeletar, getCriar, postCriar, getEditar, postEditar} from "../controller/catalogoController.js";

export const routes = express.Router()
// routes (GET, PUT, DELETE, POST)

routes.get("/", getIndex)
routes.get("/detalhes/:id_caixa", getDetalhes )
routes.get("/deletar/:id_caixa", getDeletar)
routes.get("/criar", getCriar)
routes.post("/criar", postCriar)
routes.get("/editar/:id_caixa", getEditar)
routes.post("/editar/:id_caixa", postEditar)