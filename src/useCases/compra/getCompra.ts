import { PrismaClient, Compra } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado"; 

const prisma = new PrismaClient()

// Para listar somente 1 produto
export class GetCompraUseCase {
    constructor() {}

    async handle(id: string): Promise<Compra | null> {
        const Compra = await prisma.compra.findFirst({
            where: {
                id: {
                    equals: id
                },
            },
            include: {
                items: true
            }
        })
        if (!Compra) {
            throw new NotFoundException('Compra não localizada!')
        }
        return Compra
    }
}