import Book from './book.model.js';

const postBook = async (req,res)=>{
    try{
        const newBook = new Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"success", book :newBook});
    } catch (error){
        
        console.log("error creating book" , error);
        res.status(500).send({message:"failed"});
    }
    console.log(req.body);
}

const getallBooks = async (req,res) =>{
   try{
    const books= await Book.find().sort({createdAt : -1});
    res.status(200).send(books);
   }
   catch (error){   
    console.log("error to get all books " , error);
    res.status(500).send({message:"failed to get all books"});
   }
}


const singleBook  = async (req,res) =>{
    try{
        const {id}=req.params;
        const book= await Book.findById(id);
        if(!book){
            res.status(404).send({message:"book not found"});
        }
        res.status(200).send(book);
       }
       catch (error){   
        console.log("error to get a books " , error);
        res.status(500).send({message:"failed to get  books"});
       }
}

const updateBook= async(req,res) =>{
    try{
        const {id}=req.params;
        const updatebook= await Book.findByIdAndUpdate(id,req.body,{new : true});
        if(!updatebook){
            res.status(404).send({message:"book not found"});
        }
        res.status(200).send(updatebook);
       }
       catch (error){   
        console.log("error updating books " , error);
        res.status(500).send({message:"failed to update  book"});
       }
}
    

const deletBook = async(req,res) =>{
    try{
        const {id}=req.params;
        const delatebook = await Book.findByIdAndDelete(id);
        if(!delatebook){
            res.status(404).send({message:"book not found"});
        }
        res.status(200).send({message : "Book deleted succesfully"});
       }
       catch (error){   
        console.log("error delating books " , error);
        res.status(500).send({message:"failed to delate  book"});
       }
}


export {postBook,getallBooks,singleBook,updateBook,deletBook};    