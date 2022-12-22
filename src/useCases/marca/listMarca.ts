import { Marca, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Para listar todos produtos
export class ListMarcaUseCase {
    constructor() {}

    async handle(): Promise<Marca[]> {
        const marcaExist = await prisma.marca.findMany()

        return marcaExist
    }
}