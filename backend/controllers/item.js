const Item=require('../models/item')

module.exports.getItem=async(req,res)=>{
const items=await Item.find();
res.json(items);
}

module.exports.createItem=async(req,res)=>{
    const item=new Item(req.body);
    await item.save();
    res.json(item);
}

module.exports.updateItem=async(req,res)=>{
    
    const {id}=req.params;

    const matchedItem=await Item.findByIdAndUpdate(id,{...req.body});

    await matchedItem.save();
    res.json(matchedItem);
}

module.exports.deleteItem=async(req,res)=>{
    const {id}=req.params;
    const deletedItem=await Item.findByIdAndDelete(id);
    res.json(deletedItem);
}