import { Router } from "express";
import { validacaoMiddlleware } from "../middlewares/validacao";
import { createCompra, getCompra, listCompra,deleteCompra } from "../controllers/compra";

import { compraValidations, compraIdValidation } from "../validacao/compra";

const compraRoutes = Router()

compraRoutes.get ('/', listCompra)
compraRoutes.get ('/:id', getCompra)
compraRoutes.post ('/', compraValidations, validacaoMiddlleware, createCompra)
compraRoutes.delete ('/:id', compraIdValidation, validacaoMiddlleware, deleteCompra)

export default compraRoutes