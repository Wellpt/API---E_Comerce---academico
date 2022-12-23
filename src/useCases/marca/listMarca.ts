import { Marca, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Para listar todas as marcas
export class ListMarcaUseCase {
    constructor() {}

    async handle(): Promise<Marca[]> {
        const marcaExist = await prisma.marca.findMany()

        return marcaExist
    }
}