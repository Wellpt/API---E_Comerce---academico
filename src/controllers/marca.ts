import { Request, Response } from "express"

import { MarcaDto } from "@domain/dtos/marca"
import { ListMarcaUseCase, GetMarcaUseCase, CreateMarcaUseCase, UpdateMarcaUseCase, DeleteMarcaUseCase } from "useCases/marca"



// lista todas as marcas
export async function listMarca (req: Request, res: Response) {
    const useCase = new ListMarcaUseCase()
    const marcas = await useCase.handle()
    return res.json(marcas)
}

// buscar pelo ID trazer informaçoes da marca
export async function getMarca(req: Request<{id: string }>, res: Response) {
    const { id } = req.params
    const useCase = new GetMarcaUseCase();
    const marca = await useCase.handle(Number(id))
    return res.json(marca)
}
// Cria marca 
export async function createMarca (req: Request<{},{}, MarcaDto>, res: Response) {
    const marca = req.body
    const useCase = new CreateMarcaUseCase()
    const createMarca = await useCase.handle(marca)
    return res.json(createMarca)
}
// Atualizar dados da marca pelo BD
export async function updateMarca (req: Request<{ id: string}, {}, Omit<MarcaDto, 'id'>>, res: Response) {
    const { id } = req.params
    const marcaData = req.body
    const useCase = new UpdateMarcaUseCase()
    const updateMarca = await useCase.handle({
        id: Number(id),
        ...marcaData
    })
    return res.json(updateMarca)
}
// apagar marca pelo banco
export async function deleteMarca(req: Request<{id: string }>, res: Response) {
    const { id } = req.params
    const useCase = new DeleteMarcaUseCase()
    await useCase.handle(Number(id))
    return res.json({
        messge: 'Marca deletada com sucesso!'
    })
}