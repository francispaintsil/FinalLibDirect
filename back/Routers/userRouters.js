const express = require('express');
const userRouter = express.Router();
const controllers = require('../Controllers/controlers');

//middle wares
const userMiddleWare = require('../Middlewares/userMiddleware')

userRouter.get('/login',userMiddleWare.userLoginMid, controllers.userLogin);
userRouter.post('/createbook',userMiddleWare.userCreateBookMid, controllers.userCreateBook);
userRouter.get('/loadBooks',controllers.userLoadBooks);

module.exports = userRouter;