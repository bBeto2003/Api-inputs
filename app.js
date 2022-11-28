const express = require('express')
const app = express()

var cors = require('cors') 
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router=require('./routes/index');
app.use('/api',router);
app.listen(3000,()=>console.log('Escuchando el puerto 3000'));