import { Request, Response } from "express";

import { UserDto } from "@domain/dtos/user";
import { ListUsersUseCase, GetUsersUseCase, CreateUsersUseCase, UpdateUsersUseCase, DeleteUsersUseCase } from "@useCases/user";

//Lista usuarios
export async function listUsers(req: Request, res: Response) {
    const useCase = new ListUsersUseCase()
    const users = await useCase.handle()
    return res.json(users)
}

//buscar usuario pelo ID
export async function getUser(req:Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new GetUsersUseCase()
    const user = await useCase.handle(id)
    return res.json(user)
}

export async function createUser(req:Request<{},{}>, res: Response) {
    const user = req.body;
    const useCase = new CreateUsersUseCase()
    const createUser = await useCase.handle(user)
    return res.json (createUser) 
}

export async function updateUser(req:Request<{id: string}, {}, Omit<UserDto, 'id'>>, res: Response) {
    const { id } = req.params
    const userData = req.body
    
    const useCase = new UpdateUsersUseCase()
    const updateUser = await useCase.handle({
        id, ...userData
    })
    return res.json(updateUser)
}

export async function deleteUser(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new DeleteUsersUseCase()
    await useCase.handle(id)

    return res.json({
        message: 'Usuario deletado com sucesso!!'
    })
}