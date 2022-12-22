//validadeção de dados da marca

import { body, param } from 'express-validator'

export const marcaValidations = [
    body('name').notEmpty().withMessage('Nome é obrigatório!')
]

export const marcaIdValidation = [
    param('id').notEmpty().withMessage('Id é obrigatória!')
]

export const editMarcaValidations = [...marcaIdValidation, ...marcaValidations]