import { model,Schema,Document } from "mongoose";
import Joi from "joi";

export interface IfBook extends Document{
    title:String,
    author:String,
}


const bookSchema = new Schema<IfBook>({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    }
})

export const validateBook = (book: IfBook) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        author: Joi.string().min(3).max(255).required(),
    });

    return schema.validate(book);
};

const Book = model<IfBook>('Book',bookSchema);

export default Book;