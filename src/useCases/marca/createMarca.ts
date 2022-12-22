import { PrismaClient, Marca } from "@prisma/client";

import { MarcaDto } from "@domain/dtos/marca";

const prisma = new PrismaClient()

// Classe que cria uma marca
export class CreateMarcaUseCase {
    constructor() {}

    async handle(marca: Omit<MarcaDto, 'id'>): Promise<Marca> {
        const createdMarca = await prisma.marca.create({
            data: {
                name: marca.name
            }
        })
        return createdMarca
    }
}