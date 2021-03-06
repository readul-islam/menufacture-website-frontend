import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
  useEffect(() =>{
    const dataLoad = async() => {
        const {data} = await axios.get('http://localhost:5000/products');
        setProducts(data);
        // console.log(data);
    }
    dataLoad()
  },[])
    return (
        <section className='py-16 px-4 bg-zinc-800'>
            <div className='text-center mb-12'>
                <h1 className='text-5xl font-bold text-[#B65C2F]'>New Products On Market</h1>
                <p className='text-xl font-bold pt-4 text-emerald-500'>New Availavle Product</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-w-lg lg:px-4 xl:pl-24'>
         {products.slice(0,3).map(product =>  <Product key={product._id} product={product} />)}
        </div>
        </section>
    );
};

export default Products;