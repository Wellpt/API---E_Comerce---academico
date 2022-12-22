import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient()

//Para deletar usuario

export class DeleteUserUseCase {
    constructor () {}

    async handle(id: string) {
        //existe?
        const userExist = await this.verificaUserExiste(id)

        if (!userExist) {
            throw new NotFoundException('User não encontrado')
        }

        await prisma.user.delete({
            where: {
                id: id
            }
        })
    }
    // função que verifica se o usuario existe
    async verificaUserExiste(id: string): Promise<boolean> {
        const user = await prisma.user.findFirst ({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return user !== null
    }
}