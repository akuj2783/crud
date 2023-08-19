import React, { useEffect, useState } from 'react'
import '../stylesheets/home.css'
import axios from 'axios';
import EditForm from '../components/EditForm'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const backendURL=import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
    const [items,setItems]=useState(null);
    const [editItem, setEditItem] = useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
       axios.get(`${backendURL}/items`)
       .then(res => {
        setItems(res.data);
      })
        .catch(err=>console.log('error: ',err));
    },[]);

    const deleteItem=(itemId)=>{
       axios.delete(`${backendURL}/items/delete/${itemId}`)
            .then(res=>{
                const itemsAfterDeletion=items.filter(item=>item._id!==res.data._id)
                setItems([...itemsAfterDeletion])
            })
            .catch(err=>{console.log('error while deleting item: ',err)});
    }

    const renderEditForm = (item) => {
      console.log("item: ",item)
      setEditItem(item); 
      navigate(`/item/update/${item._id}`,{state:{item}})
    };
  

  return (
    <>
      <div className='homeWrapper'>
      {
        items?items.map(item=>(
            <div className='itemCard' key={item._id}>
                <div className='image'>
                    <img src={item.image} alt='product image'/>
                </div>
                <div className='itemTitle'>
                    <h2>{item.title}</h2>
                </div>
                <div className='itemDescription'>
                    <p>{item.description}</p>
                </div>
                <div className='itemPrice'>
                    <span>Price: ${item.price}</span>
                    <br/><br />
                </div>
                <div className='actions'>
                    <button className='btn' onClick={() => renderEditForm(item)}>Edit</button>&nbsp;&nbsp;
                    <button className='btn' onClick={()=>deleteItem(item._id)}>Delete</button>&nbsp;&nbsp;
                </div>
            </div>
        ))
        :<h2>Loading...</h2>
      }
     </div>
    </>
    
  )
}

export default Home;
