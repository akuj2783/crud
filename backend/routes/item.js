const express=require('express')
const router=express.Router();
const {getItem,createItem,deleteItem,updateItem}=require('../controllers/item');



router.get('/',getItem);

router.post('/new',createItem);

router.put('/update/:id',updateItem);

router.delete('/delete/:id',deleteItem);



module.exports=router;