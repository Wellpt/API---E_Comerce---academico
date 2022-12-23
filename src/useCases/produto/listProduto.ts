import { PrismaClient, Produto } from "@prisma/client";

const prisma = new PrismaClient()

// Para listar todos os produtos
export class ListProdutoUseCase {
    constructor() {}

    async handle(): Promise<Produto[]> {
        const listProdutos = await prisma.produto.findMany({
            include: {
                marca: true
            }
        })
        return listProdutos
    }
}