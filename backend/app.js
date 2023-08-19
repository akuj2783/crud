const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');

const app=express();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017//crud';
app.use(express.json());
app.use(cors());

mongoose.connect(dbUrl)
.then(()=>{
    console.log("connected to databse successfully")
})
.catch(err=>{ console.log("error connecting to database",err)})

const itemRoutes=require('./routes/item')

app.use('/items',itemRoutes)



const PORT=3000;
app.listen(PORT,()=>{console.log(`listning on port ${PORT}`)})