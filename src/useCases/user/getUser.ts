import { PrismaClient, User } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient()

// Listar apenas 1 usuario
export class GetUserUseCase {
    constructor () {}

    async handle(id: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })
        if (!user) {
            throw new NotFoundException('Usuario não encontrado')
        }
        return user
    }
}


