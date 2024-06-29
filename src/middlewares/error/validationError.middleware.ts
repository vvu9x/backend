import config from "../../config/config";
import { Response,Request,NextFunction } from "express";


const validationErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
    if (error.name === 'ValidationError') {
        res.status(400).json(error.message);
    }
};


export default validationErrorMiddleware;