import { Response,Request,NextFunction } from "express";


const pathNotFoundMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
    res.status(404).json(`Path ${req.originalUrl} not found`);
};

export default pathNotFoundMiddleware;