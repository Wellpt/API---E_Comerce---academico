import { Router } from "express";
import { validacaoMiddlleware } from "@middlewares/validacao";
import { createUser, getUser, listUsers, deleteUser, updateUser} from "@controllers/user";

import { userValidations, userIdValidation, editUserValidations } from "@validacao/user"

const userRoutes = Router()

userRoutes.get ('/', listUsers)
userRoutes.get ('/', getUser)
userRoutes.post ('/', userValidations, validacaoMiddlleware, createUser)
userRoutes.put ('/:id', editUserValidations, validacaoMiddlleware, updateUser)
userRoutes.delete ('/:id', userIdValidation, validacaoMiddlleware, deleteUser)

export default userRoutes