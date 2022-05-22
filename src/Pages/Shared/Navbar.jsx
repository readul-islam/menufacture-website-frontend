import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate()
  const SignOutHandler =()=>{
    signOut(auth)
    navigate('/')

  }
  
    const [user, loading, error] = useAuthState(auth);
    const menus = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    </>
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menus}
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost normal-case text-xl">Day Tools</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
{menus}
    </ul>
  </div>
  <div class="navbar-end">
   {user ? <div class="dropdown dropdown-end">
  <label tabindex="0" >
  <div class="avatar online">
     
     <div class="w-12 rounded-full">
       <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
     </div> 
    </div>

  </label>
  <ul tabindex="0" class="dropdown-content menu flex  p-4  shadow bg-base-100 rounded-box w-72 md:w-96">
   <div className='space-y-4'>
     <li className='border-b text-lg font-semibold'>Name: {user.displayName}</li>
     <li className='border-b text-lg font-semibold'>Email: {user.email}</li>
     <li className='border-b text-lg font-semibold'>Profile<input type="file" id="" /></li>
    <li className='btn btn-outline' onClick={SignOutHandler} >Sign Out</li>
   </div>
  </ul>
</div>
 :  <Link to='/sign-up' class="btn">Sign Up</Link>}
  </div>
</div>
    );
};

export default Navbar;

