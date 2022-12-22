import { PrismaClient, Produto } from '@prisma/client';
import { NotFoundException } from '@domain/exceptions/naoLocalizado';

import { ProdutoDto } from '@domain/dtos/produto';

const prisma = new PrismaClient();

// funçao para atualizar informações de 1 produto
export class UpdateProductUseCase {
  constructor() {}

  async handle({ id, descricao, valorUnitario, qtd, marcaId }: ProdutoDto): Promise<Produto> {
    // Verificar se o produto existe
    const productExist = await this.checkProductExist(id);

    if (!productExist) {
      throw new NotFoundException('Product not found!');
    }

    const updatedProduct = await prisma.produto.update({
      data: {
        descricao,
        valorUnitario,
        qtd,
        marcaId,
      },
      where: {
        id,
      },
    });

    return updatedProduct;
  }


  // Verifica se o produto existe
    async checkProductExist(id: string): Promise<boolean> {
    const product = await prisma.produto.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return !!product // outra forma de retornar que o usuario é diferente de Null
    
  }
}