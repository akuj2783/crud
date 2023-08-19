const mongoose=require('mongoose')

const ItemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
})

const Item= mongoose.model('Item', ItemSchema);
module.exports=Item;