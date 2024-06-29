import config from "../../config/config";
import { Response,Request,NextFunction } from "express";


const unknownErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
    res.status(500).json('unknown problem');
};


export default unknownErrorMiddleware;