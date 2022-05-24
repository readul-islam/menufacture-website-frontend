import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const navigate = useNavigate()
  const SignOutHandler =()=>{
    signOut(auth)
    navigate('/')

  }
  const pathname = window.location.pathname
 
    const [user, loading, error] = useAuthState(auth);
    const menus = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
    <li><NavLink to='/contact'>Contact Us</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    
   {user ?  <li><NavLink to='/dashboard'>Dashboard</NavLink></li> : ''}
    </>
    return (
        <div className="navbar w-full bg-slate-700 sticky top-0  text-white z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menus}
      </ul>
    </div>
    
    <Link to="/" className="btn btn-ghost normal-case text-xl">Day Tools</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
{menus}
    </ul>
  </div>
  <div className="navbar-end px-8">
   {user ? <><div className="dropdown dropdown-end">
  <label tabIndex="0" >
  <div className="avatar online">
     
     <div className="w-12 rounded-full">
       <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
     </div> 
    </div>

  </label>
  <ul tabIndex="0" className="dropdown-content menu flex text-black  p-4  shadow bg-base-100 rounded-box w-72 md:w-96">
   <div className='space-y-4'>
     <li className='border-b text-lg font-semibold'>Name: {user.displayName}</li>
     <li className='border-b text-lg font-semibold'>Email: {user.email}</li>
     <li className='border-b text-lg font-semibold'>Profile<input type="file" id="" /></li>
    <li className='btn btn-outline' onClick={SignOutHandler} >Sign Out</li>
   </div>
  </ul>
</div>

  <label htmlFor="dashboard-drawer" className=" drawer-button pl-4 lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
 
</>

 :  <Link to='/sign-up' className="btn">Sign Up</Link>}
  </div>
</div>
    );
};

export default Navbar;

