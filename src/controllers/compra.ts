import { Request, Response } from "express";

import { CompraDto } from "@domain/dtos/compra";
import { CreateCompraUseCase, DeleteCompraUseCase, GetCompraUseCase, ListCompraUseCase } from "useCases/compra";

//Criar compra
export async function createCompra(req: Request<{},{}, CompraDto>, res: Response) {
    const compra = req.body
    const useCase = new CreateCompraUseCase()
    const createdCompra = await useCase.handle(compra)
    return res.json(createCompra)
}

// buscar compra por ID e lista as informações do produto
export async function getCompra(req:Request<{id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new GetCompraUseCase()
    const compra = await useCase.handle(id)
    return res.json(compra)
}

//lista todas as Compras
export async function listCompra(req:Request, res: Response) {
    const useCase = new ListCompraUseCase()
    const compras = await useCase.handle()
    return res.json(compras)
}

//Excluir (cancelar) uma compra pelo ID
export async function deleteCompra(req:Request<{id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new DeleteCompraUseCase()
    await useCase.handle(id)
    return res.json ({
        message: 'Compra deletada com sucesso!!'
    })
}