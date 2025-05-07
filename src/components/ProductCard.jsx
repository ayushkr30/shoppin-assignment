// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-full sm:w-72 max-w-full">
      <img src={product.imageUrl} alt={product.name} className="w-full h-60 sm:h-72 object-cover rounded-xl mb-4" />
      <h3 className="font-semibold text-lg capitalize">{product.name}</h3>
      <p className="text-sm text-black-600">{product.brand}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-green-600">₹{product.price}</span>
        {product.discountPercentage > 0 && (
          <span className="line-through text-black-400">₹{product.originalPrice}</span>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-red-600 font-semibold text-sm mt-1">{product.discountPercentage}% OFF</p>
      )}
    </div>
  );
};

export default ProductCard;
