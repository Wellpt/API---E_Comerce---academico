// validação de dados compra

import { body, param } from 'express-validator' 

export const compraValidations = [
    body('userId').notEmpty().withMessage('Id do usuário é obrigatória!'),
    body('items').notEmpty().withMessage('Items são obrigatórios!')
]

export const compraIdValidation = [
    param('id').notEmpty().withMessage('Id é obrigatório!')
]

export const editCompraValidations = [... compraIdValidation, compraValidations]