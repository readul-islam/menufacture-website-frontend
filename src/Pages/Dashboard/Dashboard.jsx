import React from "react";
import {   NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
    
      
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
