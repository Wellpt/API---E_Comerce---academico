import { PrismaClient, Produto } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient()

// para listar somente 1 produto

export class GetProdutoUseCase {
    constructor (){}

    async handle(id: string): Promise<Produto | null> {
        const produto = await prisma.produto.findFirst({
            where: {
                id: {
                    equals: id,
                },
            },
            include: {
                marca: true
            }
        })
        if (!produto) {
            throw new NotFoundException('Prduto não encontrado')
        }
        return produto
    }
}