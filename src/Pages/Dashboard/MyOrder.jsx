
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyOrder = ({order,refetch}) => {
  // console.log(order);
    const deleteHandler = async(id) =>{
        const confirm = window.confirm('Are you sure you want to delete')
        if(confirm){
           
            const {data} = await axios.delete(`http://localhost:5000/order/${id}`,{
              
            })
          if(data){
              toast.success('Order deleted successfully')
    
              refetch()
          }
        }
 }
  
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='w-2/3' src={order.img} alt="Shoes " /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{order.product}</h2>
    <p className='text-lg font-semibold'> Total quantity: {order.quantity}</p>
    <p className='text-lg font-semibold'>Total Price: ${order.total}</p>
    <div className="card-actions flex justify-between">
    {order.paid ? <button disabled
    className='btn w-full text-white' >Payment compelete</button> 
    :
    <>
    
    <Link to={`payment/${order._id}`}>
    <button 
    className='btn btn-secondary text-white'>Pay Now</button>
    </Link>
      <button onClick={()=>deleteHandler(order._id)}className="btn btn-outline">delete</button>
    </>
    
    }
    </div>
  </div>
</div>
    );
};

export default MyOrder;