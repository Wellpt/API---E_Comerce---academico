// valida dados recebidos

import { body, param } from 'express-validator'

export const produtoValidations = [
    body('descricao').notEmpty().withMessage('Descrição é obrigatória!'),
    body('valorUnitario').notEmpty().withMessage('Valor unitario é obrigatório!'),
    body('qtd').notEmpty().withMessage('Quantidade é obrigatória!'),
    body('marcaId').notEmpty().withMessage('Marca é obrigatória!')
]

export const produtoIdValidation = [
    param('id').notEmpty().withMessage('Id é obrigatória')
]

export const editProdutoValidations = [... produtoIdValidation, ...produtoValidations]