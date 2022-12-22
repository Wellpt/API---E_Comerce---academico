import { PrismaClient, User } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

import { UserDto } from "@domain/dtos/user";

const prisma = new PrismaClient()

// Para atualizar informações de 1 usuario
export class UpdateUsersUseCase {
    constructor (){}

    async handle ({ id, name, email, password}: UserDto): Promise<User>{
        //veriricar se usuario existe
        const userExist = await this.verificaUserExiste(id)

        if (!userExist) {
            throw new NotFoundException ('Usuario não encontrado')
        }

        const updatedUser = await prisma.user.update({
            data: {
                name,
                email,
                password,
            },
            where: {
                id,
            }
        })
        return updatedUser
    }
    // verificar se usuario existe
    async verificaUserExiste(id: string): Promise<boolean> {
        const user = await prisma.user.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return !!user // mais uma forma de verificar se resultado é deferente de null
    }
}