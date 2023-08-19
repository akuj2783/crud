import React, { useState } from 'react';
import '../stylesheets/editForm.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditItem= () => {

  const itemId=useParams().id;
  const navigate=useNavigate();
  const location = useLocation();

  const [item, setItem] =useState({...location.state.item});

  const handleInputChange=(event)=>{
    const {name,value}=event.target;
    setItem(prevState=>(
      {...prevState,[name]: value}
    ))
   }


   const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log("form data is ",item);
    try{
      await axios.put(`http://localhost:3000/items/update/${itemId}`,item)
    }catch (error) {
      console.error('Error while adding new item:', error);}

      navigate('/');
   }


  return (
    <div className='editItemWrapper'>
      <h2>Edit Item</h2>
      <form className='editItemForm' onSubmit={handleSubmit} >
        <label htmlFor='title'>Title:</label>
        <input 
        type='text' 
        id='title' 
        name='title' 
        onChange={handleInputChange} 
        value={item.title}
        required />

        <label htmlFor='image'>Image url:</label>
        <input 
        type='text' 
        id='image'
        name='image'
        onChange={handleInputChange} 
        value={item.image}
        required />

        <label htmlFor='price'>Price</label>
        <input 
        type='number' 
        id='price' 
        name='price' 
        onChange={handleInputChange} 
        value={item.price}
        required />

        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          id='description'
          name='description'
          onChange={handleInputChange} 
          value={item.description}
          required
        />

        <button className='btn' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditItem
