import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const Payment = () => {
    const [payProduct,setPayProduct] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
        const paymentProduct = async () => {
          const { data } = await axios.get(`http://localhost:5000/order/${id}`,{
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
          });
         
          setPayProduct(data);
        
        
        };
        paymentProduct();
      }, [id]);
      const stripePromise = loadStripe('pk_test_51L1AL5E24HHvYt8NbjGorU81WnI0KnORZOGcTRMPPbLhlzC7EpMWxHc7L61roy6FhtSH0yUjVDMICehtcNRHWkHK00rRAnbbDz');

    return (
       <div className="flex justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
        <Elements stripe={stripePromise}>
        <CheckoutForm payProduct={payProduct} />
      </Elements>
      </div>
      </div>
    );
};

export default Payment;