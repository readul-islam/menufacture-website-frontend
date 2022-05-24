import React from 'react';

const Banner = () => {
    return (
        <div style={{background:`url(https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2020/11/construction-industry-001-scaled.jpeg?resize=1170%2C463&ssl=1)`, backgroundSize: 'cover'}}  className='min-h-screen w-screen flex flex-col items-center justify-center space-y-4  md:space-y-10 '>
            

  <h1 className=' text-5xl md:text-[120px] text-white font-bold'>NEED
</h1>
        <h1 className='text-5xl md:text-[120px] text-white font-bold'>
NEW TOOLS?</h1>
 
<button className="btn btn-primary text-xl md:text-3xl">Read More</button>
        </div>
    );
};

export default Banner;