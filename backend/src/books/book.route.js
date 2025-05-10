import express from 'express';
const Bookrouter =  express.Router();
import Book from './book.model.js';
import { deletBook, getallBooks, postBook, singleBook, updateBook } from './book.controller.js';
import verifyAdminToken from '../middlewares/verifyAdminToken.js';

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
Bookrouter.post("/create-book", verifyAdminToken, postBook);


//  get all books
Bookrouter.get("/",getallBooks);

// get single book
Bookrouter.get('/:id',singleBook);

// update a book
Bookrouter.put("/edit/:id" , verifyAdminToken, updateBook );

// delete book
Bookrouter.delete('/:id',verifyAdminToken, deletBook);


export default Bookrouter ;