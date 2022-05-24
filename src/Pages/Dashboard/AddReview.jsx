import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';


const AddReview = () => {
    const [user] = useAuthState(auth);
    const {email,photoURL,displayName} = user
  
    
      const onSubmit = async(event) => {
event.preventDefault();
const review = event.target.Review.value;
console.log(review);
 const {data} = await axios.post('http://localhost:5000/review',{displayName:displayName,email:email, photoURL:photoURL,  review: review})
 console.log(data);
 if(data.insertedId){
     toast.success('your review successfully')
 }
      }
    return (
        <div>
           
                <p className="text-4xl text-secondary font-bold pt-6">REVIEW</p>

                <form onSubmit={onSubmit} >
                <div className="form-control">
  <label className="label pt-6">
    <span className="label-text">Your Review</span>
  
  </label> 
  <textarea
  required
  maxlength="200"
  minlength="10"
   className="textarea textarea-bordered text-xl h-28" name='Review' placeholder="Send your Review..."></textarea>
  <label className="label">
    {/* <span className="label-text-alt">Your bio</span>
     */}
  </label> 
</div>
  <input type="submit" value="Post" className="btn bg-gradient-to-r from-secondary to-primary border-none text-white px-10 " />
                </form>
            
            
        </div>
    );
};

export default AddReview;