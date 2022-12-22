
//mid de tratamento de erro para evitar try cacth

import { Request, Response, NextFunction } from "express";
import { indexException } from "@domain/exceptions/indexException";

function isIndexException(obj: any): obj is indexException {
    return 'statusCode' in obj && 'message' in obj
}

// para retornar uma msg de erro para usuario
export default function errorsMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err)

    if(isIndexException(err)){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }
    return res.json({
        message: 'Alguma coisa deu errado!'
    })
}