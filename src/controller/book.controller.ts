import { Request, Response, NextFunction } from 'express';
import {addBooks,deleteBooks,getAllBooks} from '../services/book.service'
import {IfBook} from "../models/book.model";

class BookController{
    async getAllBooks(req:Request,res:Response,next:NextFunction):Promise<void>{
        try{
            const books:any = await getAllBooks();
            res.status(200).json(books);
        } catch(e:any){
            next(e);
        }
    }

    async createBook(req:Request,res:Response,next:NextFunction):Promise<void>{
        try{
            const newbook:IfBook = await addBooks(req.body);
            res.status(201).json(newbook);
        }catch(e:any){
            next(e);
        }
    }

    async deleteBooks(req:Request,res:Response,next:NextFunction):Promise<void>{
        try{
            const deletedBook = await deleteBooks(req.params.id);
            if (deletedBook){
                res.status(204).json(deletedBook);
            }else{
                res.status(404).json('Book not found');
            }
        }catch(e:any){
            next(e);
        }
    }
}

export default new BookController();