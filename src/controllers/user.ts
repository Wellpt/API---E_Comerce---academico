import { Request, Response } from "express";

import { UserDto } from "@domain/dtos/user";
import { LisUsersUseCase } from "../useCases/user/listUser";
import { GetUserUseCase } from "../useCases/user/getUser"
import { CreateUserUseCase } from "../useCases/user/createUser";
import { UpdateUserCase } from "../useCases/user/updateUser";
import { DeleteUserUseCase } from "../useCases/user/deleteUser";

//Lista usuarios
export async function listUsers(req: Request, res: Response) {
    const useCase = new LisUsersUseCase()
    const users = await useCase.handle()
    return res.json(users)
}

//buscar usuario pelo ID
export async function getUser(req:Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new GetUserUseCase()
    const user = await useCase.handle(id)
    return res.json(user)
}

export async function createUser(req:Request<{},{}>, res: Response) {
    const user = req.body;
    const useCase = new CreateUserUseCase()
    const createUser = await useCase.handle(user)
    return res.json (createUser) 
}

export async function updateUser(req:Request<{id: string}, {}, Omit<UserDto, 'id'>>, res: Response) {
    const { id } = req.params
    const userData = req.body
    
    const useCase = new UpdateUserCase()
    const updateUser = await useCase.handle({
        id, ...userData
    })
    return res.json(updateUser)
}

export async function deleteUser(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new DeleteUserUseCase()
    await useCase.handle(id)

    return res.json({
        message: 'Usuario deletado com sucesso!!'
    })
}