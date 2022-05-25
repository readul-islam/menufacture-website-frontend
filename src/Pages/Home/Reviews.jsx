import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
const [reviews, setReviews] = useState([]); 
useEffect(()=>{

fetch('http://localhost:5000/review')
.then(res => res.json())
.then(data => {
    
    return setReviews(data)
})

},[])
    return (
        <div className="my-12">
            <h2 className="uppercasem text-center md:mb-3 font-bold text-[20px] md:text-5xl text-[#2BAAA9]">Review's</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {
                reviews.map(review => <Review key={review._id} reviewdetail={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;