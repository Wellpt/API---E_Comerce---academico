import { PrismaClient, Compra } from "@prisma/client";

const prisma = new PrismaClient()

// Para listar todos os produtos cadastrados
export class ListCompraUseCase {
    constructor (){}

    async handle(): Promise<Compra[]> {
        const compras = await prisma.compra.findMany({
            include: {
                items: true
            }
        })
        return compras
    }
}