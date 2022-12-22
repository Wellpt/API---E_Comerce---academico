import { PrismaClient, Marca } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient()

// Lista apenas 1 marca

export class GetMarcaUseCase {
    constructor() {}

    async handle(id: number): Promise<Marca | null>{
        const marca = await prisma.marca.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })

        if (!marca) {
            throw new NotFoundException('Marca não encontrada')
        }
        return marca
    }
}
