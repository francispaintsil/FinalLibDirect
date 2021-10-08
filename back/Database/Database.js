const Pool = require('pg').Pool;

const db = new Pool({
    user : 'postgres',
    password: 'postgres',
    port: '5432',
    host:'localhost',
    database: 'Library'
});

const findUser = async (usernname,password) =>{
    try {
        const {rows} = await db.query('select * from librarian where username = $1 and password = $2',[usernname,password]);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error)
        return error;
    }
}

const createBook = async (title,author,year,catetory,quantity) =>{
    try {
        const sql = `insert into books (title,author,year,category,quantity)
         values ($1,$2,$3,$4,$5)`;
        const {rows} = db.query(sql,[title,author,year,catetory,quantity]);
        return rows;
    } catch (error) {
        return error;
    }
}

const loadBooks = async () =>{
    try {
        const sql = 'select * from books';
        const {rows} = db.query(sql);
        return rows;
    } catch (error) {
        return rows;
    }
}

module.exports = {findUser,createBook,loadBooks}