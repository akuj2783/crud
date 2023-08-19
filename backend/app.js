const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(()=>{
    console.log("connected to databse successfully")
})
.catch(err=>{ console.log("error connecting to database")})

const itemRoutes=require('./routes/item')

app.use('/items',itemRoutes)



const PORT=3000;
app.listen(PORT,()=>{console.log(`listning on port ${PORT}`)})