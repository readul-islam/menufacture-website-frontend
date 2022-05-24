import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <div>
        <div className='flex flex-col items-center justify-center'>
            <div className="avatar online">
     
     <div className="w-28 rounded-full mt-6 ">
       <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
     </div> 
    </div>
            <h1 className=' text-4xl text-secondary font-bold pt-2'>{user.displayName}</h1>
            <h1 className=' text-xl text-secondary font-bold pt-2'>{user.email}</h1>
            


      
        </div>
       <div className='flex  justify-center mt-4'>
       <div class="card  bg-base-100 shadow">
  <div class="card-body ">
    
    <div className='flex items-center'>
   <p className='text-xl font-bold'>Add Profile Name</p>
   <div className="btn btn-outline mx-2">Upload</div>
   
    
    </div>
    <form className='flex items-center'>
   <p className='text-xl font-bold'>Add Profile Picture</p>
   <input type='file' name='profile'  className='mx-2'></input>
   <input type="submit" value="Upload" className='btn btn-outline' />
   
    
    </form>
    <div className='flex items-center'>
   <p className='text-xl font-bold'>Add Linkdin</p>
   <div className="btn btn-outline mx-2">Upload</div>
   
    
    </div>
    
    
  </div>
 
</div>
       </div>
        </div> 
    );
};

export default MyProfile;