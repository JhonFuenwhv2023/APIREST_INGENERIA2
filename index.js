const express = require('express')
const {getConnection} = require('./db/db-connect-mongo');
const cors = require('cors');
require('dotenv').config();


const app = express()
const port = process.env.PORT;

// implementamos cors
app.use(cors());

getConnection();


//Parseo de los datos a JSON

app.use(express.json());

app.use('/productora', require('./router/productora'));



app.listen( port, () =>{
    console.log('App listening on port 3000!')
});