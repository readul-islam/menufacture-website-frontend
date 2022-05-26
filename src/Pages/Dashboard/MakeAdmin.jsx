import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [allUsers,setAllUsers] = useState([])
    useEffect(() => {
const allUser = async()=>{
    const {data} = await axios.get('http://localhost:5000/user')
    setAllUsers(data);

}
allUser()
    },[])
    return (
        <div class="overflow-x-auto w-full">
        <table class="table w-full">
          
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Email</th>
              <th>Id</th>
              <th>Access</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         
           {allUsers.map(user => 
             <tr key={user._id}>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
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
                <span class="badge badge-ghost badge-sm">{user._id}</span>
              </td>
              <td>
              <button disabled={user?.rule}
               class="btn btn-secondary text-white btn-xs"> Make Admin</button>
              </td>
              <th>
                <button disabled={user?.rule}
                 class="btn text-white  btn-xs">Remove Admin</button>
              </th>
            </tr>)}
           
          
          </tbody>
         
         
          
        </table>
      </div>
    );
};

export default MakeAdmin;