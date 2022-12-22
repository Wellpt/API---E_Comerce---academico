import { PrismaClient } from "@prisma/client"
import { NotFoundException } from "@domain/exceptions/naoLocalizado"

const prisma = new PrismaClient()

//Deletar Marca
export class DeleteMarcaUseCase {
    constructor() {}

    async handle(id: number) {
        //existe?
        const marcaExist = await this.verificaMarcaExist(id)
        if (!marcaExist) {
            throw new NotFoundException('Marca Nao encontrada')
        }

        await prisma.marca.delete({
            where: {
                id: id
            }
        })
    }
      // verificar se a marca existe
      async verificaMarcaExist(id: number): Promise<boolean> {
        const marca = await prisma.marca.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return marca !== null
    }
}


