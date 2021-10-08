const userLoginMid = (req,res,next) =>{
    // console.log('data => ',req.query)
    const {username,password} = req.query;
    req.username = username;
    req.password = password;
    next();
}

const userSearchBookMid = (req,res,next) =>{
    const {title,isbn,author} = req.body;
    req.title = title;
    req.isbn = isbn;
    req.author = author;
    next();
}

const  userCreateBookMid = (req,res,next) =>{
    const {title,author,year,category,quantity} = req.body;
    req.title = title;
    req.author = author;
    req.year = year;
    req.category = category;
    req.quantity = quantity;
    next();
}

module.exports = {userLoginMid, userSearchBookMid, userCreateBookMid}