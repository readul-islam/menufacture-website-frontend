
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Product = ({product}) => {
   
    console.log(product);
    return (
<div className="card card-compact mx-w-xs mx-w-lg xl:w-3/4 bg-base-100 shadow-xl">
  <figure><img className="w-2/3" src={product.img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{product.name}</h2>
    <p className='xl:text-xl lg:text-lg md:text-md text-justify '>{product.description}</p>
    <h2 className="text-xl font-semibold  ">Available:<span className='font-normal'> {product.Availavle}p</span></h2>
    <h2 className="text-xl font-semibold  ">Min-Order:<span className='font-normal'> {product.minOrder}p</span></h2>
    <h2 className="text-xl font-semibold  ">price:<span className='font-normal '> ${product.price} pp</span></h2>
    <div className="card-actions justify-end">
      <Link to={`purchase/${product._id}`}>
      <PrimaryBtn >purchase</PrimaryBtn>
      </Link>
      
    </div>
  </div>
</div>


      
    );
};

export default Product;