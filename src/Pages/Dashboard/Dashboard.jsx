import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {   NavLink, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const email = (user.email);
  const [adminRule,setAdminRule] = useState({})
  useEffect(() => {
const allUser = async()=>{
 if(email){
  const {data} = await axios.get(`http://localhost:5000/user/${email}`)
  setAdminRule(data);
  console.log(data);
 }
 

}
allUser()
  },[email])
  return (
    <div className="drawer drawer-mobile ">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col px-8 ">
    {/* <!-- Page content here --> */}
    <p className="text-4xl font-bold pt-2 ">Dashboard</p>
    <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-slate-600  text-white ">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to='orders'>My Orders</NavLink></li>
      <li><NavLink to='my-profile'>My Profile</NavLink></li>
      <li><NavLink to='add-review'>Add Review</NavLink></li>
      { adminRule.rule ? 
        <>
        <li><NavLink to='add-product'>Add Product</NavLink></li>
      <li><NavLink to='manage-products'>Manage Products</NavLink></li>
      <li><NavLink to='manage-all-products'>Manage All Orders</NavLink></li>
      <li><NavLink to='make-admin'>Make Admin</NavLink></li>
    
      </>
        
      : ''
    }
      
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
