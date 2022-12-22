import { v4 } from 'uuid'
import { PrismaClient, Produto } from '@prisma/client'

import { ProdutoDto } from '@domain/dtos/produto'

const prisma = new PrismaClient()

// class para criar produto salvar no BD

export class CreateProdutoUserCase {
    constructor() {}

    async handle(produto: Omit<ProdutoDto,'id'>) : Promise<Produto> {
        const createdProduto = await prisma.produto.create({
            data:{
                id: v4(),
                descricao: produto.descricao,
                valorUnitario: produto.valorUnitario,
                qtd: produto.qtd,
                marcaId: produto.marcaId
            }
        })

        return createdProduto
    }
}