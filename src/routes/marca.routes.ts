import { Router } from "express";
import { validacaoMiddlleware } from "@middlewares/validacao";
import { createMarca, getMarca, listMarca, deleteMarca, updateMarca } from "@controllers/marca";

import { marcaValidations, marcaIdValidation, editMarcaValidations } from "@validacao/marca";

const marcaRoutes = Router()

marcaRoutes.get ('/', listMarca)
marcaRoutes.get ('/', getMarca)
marcaRoutes.post ('/', marcaValidations, validacaoMiddlleware, createMarca)
marcaRoutes.put ('/:id', editMarcaValidations, validacaoMiddlleware, updateMarca)
marcaRoutes.delete ('/:id', marcaIdValidation, validacaoMiddlleware, deleteMarca)

export default marcaRoutes