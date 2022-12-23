import { Request, Response } from "express";

import { ProdutoDto } from "@domain/dtos/produto";
import { CreateProdutoUserCase, DeletaProdutoUseCase, GetProdutoUseCase, ListProdutoUseCase, UpdateProductUseCase } from "useCases/produto";

//Lista todos os produtos
export async function listProdutos(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new ListProdutoUseCase
    const produtos = await useCase.handle()
    return res.json(produtos)
}

//Busca produto por ID
export async function getProduto(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new GetProdutoUseCase()
    const produto = await useCase.handle(id)
    return res.json(produto)
}

//Criar produto

export async function createProduto(req:Request<{},{}, ProdutoDto>, res: Response) {
    const produto = req.body
    const useCase = new CreateProdutoUserCase()
    const createProduto = await useCase.handle(produto)
    return res.json(createProduto)
}

//Atualiza as informações de 1 produto, pelo id
export async function updateProduto(req:Request<{ id: string}, {}, Omit<ProdutoDto, 'id'>>, res: Response) {
    const { id } = req.params
    const produtoData = req.body
    
    const useCase = new UpdateProductUseCase()
    const updateProduto = await useCase.handle({
        id, ...produtoData
    })
    return res.json(updateProduto)
}

//Excluir um produto cadastrado, pelo ID
export async function deleteProduto(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new DeletaProdutoUseCase()
    await useCase.handle(id)
    return res.json({
        message: 'Produto deletado com sucesso!'
    })
}