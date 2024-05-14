import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  // const handleNavigate=()=>{
  //   navigate(`/product/${product?._id}`)c
  // }

  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer border h-auto' onClick={()=>navigate(`/product/${product?._id}`)}>
    <div className='h-[15rem]'>
<img src={product.imageUrl} className='h-full w-full object-cover object-left-top'/>
    </div>
    <div className='textPart bg-white p-3'>
      <div>
          <p className='product-item-brand'> {product.brand}</p>
          <p  classNaame='product-item-title'>{product.title}</p>
      </div>
      <div className='flex items-center space-x-3     product-item-pricing"'>
          <p className='font-semibold'>₹{product.discountedPrice}</p> 
          <p className='line-through opacity-50'>₹{product.price}</p>          
          <p className='text-green-600 font-semibold'>{product.discountPersent}%off</p> 

      </div>

    </div>
  </div>
  );
};

export default ProductCard;
