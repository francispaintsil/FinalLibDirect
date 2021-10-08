const Database = require('../Database/Database');

const userLogin = async (req,res)=>{
    console.log(req.username,req.password);
    const rows = await Database.findUser(req.username,req.password);
    res.status(200).send(rows);
}

const userCreateBook = async (req,res) =>{
    console.log(req.author);
    const rows = await Database.createBook( req.title,req.author,req.year,req.category,req.quantity);
    res.status(201).send(rows);
}

const userLoadBooks = async (req,res) =>{
    const rows = await Database.loadBooks();
    console.log(rows)
    res.send(rows);
}

module.exports = {userLogin,userCreateBook,userLoadBooks}