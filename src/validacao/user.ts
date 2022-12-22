// Valida se os dados recebidos sao validos, comparando dados

import { body, param } from 'express-validator'

export const userValidations = [
    body('name').notEmpty().withMessage('Nome é obrigatório!!'),
    body('email').notEmpty().withMessage('E-mail é obrigatório!!'),
    body('password').notEmpty().withMessage('Não da pra logar sem senha!!')
]

export const userIdValidation =[
    param('id').notEmpty().withMessage('Id é obrigatório!!')
]

export const editUserValidations = [...userIdValidation, ...userValidations]