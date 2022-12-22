import { PrismaClient, Marca } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

import { MarcaDto } from "@domain/dtos/marca";
import { updateMarca } from "controllers/marca";

const prisma = new PrismaClient()

// Para atualizar uma marca
export class UpdateMarcaUseCase {
    constructor() {}

    async handle({ id, name}: MarcaDto): Promise<Marca> {
        // ver se o produto existe
        const marcaExist = await this.verificaMarcaExist(id)

        if (!marcaExist) {
            throw new NotFoundException('Marca não encontrada')
        }
        const updateMarca = await prisma.marca.update({
            data: {
                name,
            },
            where: {
                id
            }
        })
        return updateMarca
    }
    // verificar se a marca existe
    async verificaMarcaExist(id: number): Promise<boolean> {
        const marca =  await prisma.marca.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return !!marca 
    }
}