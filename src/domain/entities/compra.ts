interface CompraItemDto {
    produtoId: string
    qtd: number
}

export interface CompraDto {
    id: string
    userId: string
    items: CompraItemDto []
}