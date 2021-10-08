const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.Port || 5000;

//Routers
const userRouter = require('../Server/Routers/userRouters');


app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.listen(PORT,() => console.log('Server active on port: ',PORT));