import { PrismaClient, Produto } from "@prisma/client";

const prisma = new PrismaClient()

// Para listar todos os produtos cadastrados

export class ListProdutoUseCase {
    constructor() {}

    async handle(): Promise<Produto[]> {
        const produtos = await prisma.produto.findMany({
            include: {
                marca: true
            }
        })
        return produtos
    }
}