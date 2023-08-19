import React, { useState } from 'react';
import axios from 'axios';
import {redirect, useNavigate} from 'react-router-dom';
import '../stylesheets/newItem.css';

const NewItem = () => {

  const [formData,setFormData]=useState({
    title:"",
    image:"",
    price:"",
    description:""
  });

  const navigate=useNavigate();


 const handleInputChange=(event)=>{
  const {name,value}=event.target;
  setFormData(prevState=>(
    {...prevState,[name]: value}
  ))
 }

 const handleSubmit=async(event)=>{
  event.preventDefault();
  console.log("form data is ", formData);
  try{
    await axios.post('https://crud-backend-lkrj.onrender.com/items/new',formData)
  }catch (error) {
    console.error('Error while adding new item:', error);}

    navigate('/');

 }

  return (
    <div className='newItemWrapper'>
      <h2>Add New Item</h2>
      <form className='newItemForm' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input 
        type='text' 
        id='title' 
        name='title' 
        onChange={handleInputChange}
        value={formData.title} 
        required />

        <label htmlFor='image'>Image url:</label>
        <input 
        type='text' 
        id='image'
        name='image'
        onChange={handleInputChange} 
        value={formData.image}
        required />

        <label htmlFor='price'>Price</label>
        <input 
        type='number' 
        id='price' 
        name='price' 
        onChange={handleInputChange} 
        value={formData.price}
        required />

        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          id='description'
          name='description'
          onChange={handleInputChange}
          value={formData.description}
          required
        />

        <button className='btn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}

export default NewItem
