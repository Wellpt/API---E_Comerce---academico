import { v4 } from 'uuid';
import { PrismaClient, Compra } from '@prisma/client';

import { CompraDto } from '@domain/dtos/compra'

const prisma = new PrismaClient();


// Classe para criar a Compra e salvar no Bando de Dados
export class CreateCompraUseCase {
  constructor() {}

  async handle(compra: Omit<CompraDto, 'id'>): Promise<Compra> {

    const produtosIds = compra.items.map((x) => x.produtoId);
    const produtos = await prisma.produto.findMany({
      where: {
        id: {
          in: produtosIds
        }
      }
    })
    
    let valorTotal = 0;
    for (let i = 0; i < compra.items.length; i++) {
      const item = compra.items[i];

      // Obter o produto do array acima
      const produto = produtos.find((x) => x.id == item.produtoId);

      if (!produto) continue;

      valorTotal += Number(produto.valorUnitario) * item.qtd;
    }

    const compraId = v4();

    // Salvar a compra
    const createdCompra = await prisma.compra.create({
      data: {
        id: compraId,
        userId: compra.userId,
        valorTotal: valorTotal,
      },
    });

    // Salvar os itens da compra
    for (let i = 0; i < compra.items.length; i++) {
      const item = compra.items[i];
      const product = produtos.find((x) => x.id == item.produtoId);

      if (!product) continue;

      await prisma.compraItems.create({
        data: {
          compraId: compraId,
          produtoId: item.produtoId,
          qtd: item.qtd,
          valorUnitario: product?.valorUnitario,
        },
      });
    }
  
    return createdCompra;
  }

}