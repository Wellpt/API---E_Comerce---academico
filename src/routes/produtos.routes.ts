import { Router } from "express";
import { validacaoMiddlleware } from "../middlewares/validacao";
import { createProduto, getProduto, listProdutos, deleteProduto, updateProduto } from "../controllers/produto";

import { produtoValidations, produtoIdValidation, editProdutoValidations } from "../validacao/produto";

const produtoRoutes = Router()

produtoRoutes.get ('/', listProdutos)
produtoRoutes.get ('/:id', getProduto)
produtoRoutes.post ('/', produtoValidations, validacaoMiddlleware, createProduto)
produtoRoutes.put ('/:id', editProdutoValidations, validacaoMiddlleware, updateProduto)
produtoRoutes.delete ('/:id', produtoIdValidation, validacaoMiddlleware, deleteProduto)

export default produtoRoutes