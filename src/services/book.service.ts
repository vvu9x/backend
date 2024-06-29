import Book,{IfBook,validateBook} from "../models/book.model";


const getAllBooks = async():Promise<IfBook[]> => {
        return await Book.find().exec();
}

const addBooks = async (bookDetail:IfBook):Promise<IfBook> => {
    const {error}  = validateBook(bookDetail);
    if (error) throw new Error(error.details[0].message);
    const newBook = new Book(bookDetail);
    return await newBook.save();
}

const deleteBooks = async(bookId:String):Promise<IfBook | null> => {
    return await Book.findByIdAndDelete(bookId).exec();
}


export {
    getAllBooks,
    addBooks,
    deleteBooks
};