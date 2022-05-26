import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loding/Loading';

const ManageAllOrders = () => {
    const { isLoading, error, data:allOrders, refetch } = useQuery('order', () =>
    fetch(`http://localhost:5000/order/`,{
      
      
    }).then((res) => res.json())
  );
  console.log(allOrders);
  if(isLoading){
      return <Loading/>
  }
    return (
        <div class="overflow-x-auto w-full">
        <table class="table w-full">
          
          <thead>
            <tr>
              
              <th>Email</th>
              <th>Product</th>
              <th>quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
         
           {allOrders?.map(user => 
             <tr key={user._id}>
              
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='' />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{user?.email}</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
               
                <br/>
                <span class="badge badge-ghost ">{user.product}</span>
              </td>
              <td>
               
                <br/>
                <span class="badge badge-ghost "> {user.quantity}</span>
              </td>
              <td>
             
                <br/>
                <span class="badge badge-ghost "> ${user.total}</span>
              </td>
              <td>
              <button 
              
               class="btn btn-secondary text-white btn-xs">Accept</button>
              </td>
              <th>
                <button 
                 
                 class="btn text-white  btn-xs">Cencel</button>
              </th>
            </tr>)}
           
          
          </tbody>
         
         
          
        </table>
      </div>
    );
};

export default ManageAllOrders;