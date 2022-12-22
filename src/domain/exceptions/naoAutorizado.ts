import { indexException } from './indexException'

export class ExceptionNaoAutorizado implements indexException {
    statusCode: number = 401
    message: string

    constructor (message: string) {
        this.message = message
    }
}