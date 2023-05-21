const { response, json } = require('express');
const express = require('express');
const app = express();
require('dotenv/config');
const api = process.env.API_URL;
const userRouter = require('./routes/user')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.options('*', cors) 
               
//Middleware
app.use(express.json())
app.use(morgan('tiny'))             //displays local request

//routers
app.use(`${api}/user`, userRouter)

mongoose.connect(process.env.PROFILE_CONNECTION)
.then(() => {
    console.log('data base connection successful')
})
.catch((err) => {
    console.log(err)
})
mongoose.set('strictQuery', false);

app.listen(5000, () => {
    console.log(api);
    console.log('server running');
})