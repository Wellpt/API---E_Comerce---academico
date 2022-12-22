import { Router } from "express";

import userRoutes from "./users.routes";
import produtoRoutes from "./produtos.routes";
import marcaRoutes from "./marca.routes";
import compraRoutes
from "./compras.routes";

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/produto', produtoRoutes)
routes.use('/marca', marcaRoutes)
routes.use('/compra', compraRoutes)

export default routes