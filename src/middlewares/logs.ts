import { NextFunction, Request, Response } from "express";

export default  async function logsMiddlleware(req: Request,res: Response,next: NextFunction) { //middlewares de log    
    const { method, url} = req
    const trace = `${method} ${url}`
            
    console.info(trace)
    console.time()
    await next()
    console.timeEnd()
}