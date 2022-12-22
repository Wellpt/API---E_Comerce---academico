import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/naoLocalizado";

const prisma = new PrismaClient()

// para deletar produto
export class DeletaProdutoUseCase {
    constructor() {}

    async handle(id: string) {
        //verificar se o produto existe 
        const produtoExist = await this.verificaProdutoExiste(id)

        if(!produtoExist) {
            throw new NotFoundException('Produto não encontrado')
        }

        await prisma.produto.delete({
            where: {
                id: id,
            }
        })
    }
//verifica se o produto existe
    async verificaProdutoExiste(id: string): Promise<boolean> {
        const produto = await prisma.produto.findFirst ({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return produto !== null
    }
}