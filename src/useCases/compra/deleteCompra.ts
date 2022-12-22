import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient ()

// para deletar compra
export class DeleteCompraUseCase {
    constructor (){}

    async handle(id: string) {
        // Ver se a compra existe
        const compraExist = await this.verificarCompraExiste(id)

        if(!compraExist) {
            throw new NotFoundException('Compra não localizada')
        }
        let compraItemId = await prisma.compraItems.findFirst({
            where: {
                compraId: id
            }
        })
        if (compraItemId !== null) {
            let idItem = compraItemId.id
            while (idItem !== 0) {
                await prisma.compraItems.delete({
                    where: {
                        id: idItem
                    }
                })
                compraItemId = await prisma.compraItems.findFirst({
                    where: {
                        compraId: id
                    }
                })
                if(compraItemId !== null)
                    idItem = compraItemId?.id
                else
                    idItem = 0
            }
        }
        await prisma.compra.delete({
            where: {
                id: id
            }
        })
    }
    // verificando se o produto existe
    async verificarCompraExiste(id: string): Promise<boolean> {
        const compra = await prisma.compra.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return compra !== null
    }
}