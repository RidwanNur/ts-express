import {Request, Response} from 'express';

interface IController{
    index(req: Request, res:Response):Promise<Response> | Response
    create(req: Request, res:Response):Promise<Response> | Response
    show(req: Request, res:Response):Promise<Response> | Response
    update(req: Request, res:Response):Promise<Response> | Response
    delete(req: Request, res:Response):Promise<Response> | Response
}

export default IController;