// import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
// import { getStoredCart } from '../../Utilities/fakedb';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import ('./PlaceOrder.css')

const PlaceOrder = () => {
    const {name} = useParams();
    const {contexts} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(name);
    const onSubmit = data => {
        console.log(data)
        fetch('https://wicked-plague-18032.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=>{
           if(result.insertedId){
               alert('Thanks for your booking')
           }
        })
    };
    return (
        <div>
            <Header></Header>

            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={contexts.user.displayName} {...register("name")} />
      <input defaultValue={contexts.user.email} {...register("email", { required: true })} />
      {errors.email && <span className='error'>This field is required</span>}
      <input placeholder='Address' {...register("address")} />
      <input placeholder='Phone' {...register("phone")} />
      
      <input type="submit" />
    </form>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;