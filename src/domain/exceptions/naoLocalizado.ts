import { indexException } from "./indexException";

// exporta o erro NotFound que implementa o modelo de exceção criado em indexException

export class NotFoundException implements indexException {
    statusCode: number = 404
    message: string
    
    constructor (message: string) {
        this.message = message
    }
}