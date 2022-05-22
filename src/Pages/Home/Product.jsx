
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product);
    return (
        <div class="card mx-w-lg bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img  src={product.img} alt="Shoes" class="rounded-xl w-80" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">S{product.name}</h2>
    <p>{product.description}</p>
    <div class="card-actions">
      <Link to={`${product._id}`} class="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
    );
};

export default Product;