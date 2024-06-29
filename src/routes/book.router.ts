import { Router } from "express";
import bookController from "../controller/book.controller";

const v1Router = Router();

v1Router.get('/books',bookController.getAllBooks);
v1Router.post('/books',bookController.createBook);
v1Router.delete('/books/:id',bookController.deleteBooks);

export default v1Router;