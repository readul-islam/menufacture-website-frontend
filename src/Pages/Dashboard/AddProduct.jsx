import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddProduct = () => {
    const imgStrogeKey ='6759a9eee99963e6a28bb04e2b21046c'
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit =  (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imgStrogeKey}`;
       fetch(url,{
           method: 'POST',
           body: formData
       }).then(res => res.json()).then(result =>{
           console.log(result);
           if(result.success){
               const image = result.data.url;
               const product = {
                   name: data.name,
                   description: data.description,
                   available: parseInt(data.available),
                   quantity: parseInt(data.quantity),
                   price: parseInt(data.price),
                   img:image
                     }
              fetch('http://localhost:5000/products',{
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json'},
                     body: JSON.stringify(product)
              }).then(res => res.json())
              .then(data => {
                if(data){
                  toast.success('product successfully added')
                }
              })
           }
       })


    };
  
    return (
       <div className='flex justify-center'>
 <div className="card w-1/3 bg-base-100 shadow-xl">
  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
  
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <input  {...register("name",{required:true})}
   type="text" placeholder="product name" className="input input-bordered w-full " />
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <input {...register("description",{required:true})}
   type="text"  className="input  py-10 input-bordered w-full " />
  <label className="label">
    <span className="label-text">Abvailable Product</span>
  </label>
  <input {...register("available",{required:true})}
  type="text" placeholder="availaable quantity" className="input input-bordered w-full " />
  <label className="label">
    <span className="label-text">Minimum Order qunatity</span>
  </label>
  <input {...register("quantity",{required:true})}
   type="text" placeholder="minimum order quantity" className="input input-bordered w-full " />
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input {...register("price",{required:true})}
   type="text" placeholder="price per piece" className="input input-bordered w-full " />
  <label className="label">
    <span className="label-text">Upload Image</span>
  </label>
  <input {...register("image",{required:{
      value:true,
      message:'image is required'
  }})}
   type="file" name='image'  className="input input-bordered w-full " />
  
<input type="submit" value="Post" className='btn btn-secondary' />
   
    
  </form>
</div>

       </div>
    );
};

export default AddProduct;