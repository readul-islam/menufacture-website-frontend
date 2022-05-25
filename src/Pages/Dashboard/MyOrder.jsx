
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MyOrder = ({order,refetch}) => {
    const deleteHandler = async(id) =>{
        const confirm = window.confirm('Are you sure you want to delete')
        if(confirm){
           
            const {data} = await axios.delete(`http://localhost:5000/order/${id}`)
          if(data){
              toast.success('Order deleted successfully')
    
              refetch()
          }
        }
 }
  
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='w-2/3' src={order.img} alt="Shoes " /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">{order.product}</h2>
    <p className='text-lg font-semibold'> Total quantity: {order.quantity}</p>
    <p className='text-lg font-semibold'>Total Price: ${order.total}</p>
    <div class="card-actions flex justify-between">
    <Link to={`payment/${order._id}`}>
    <PrimaryBtn>Pay Now</PrimaryBtn>
    </Link>
      <button onClick={()=>deleteHandler(order._id)} class="btn btn-outline">delete</button>
    </div>
  </div>
</div>
    );
};

export default MyOrder;