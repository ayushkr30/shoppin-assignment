import React, { useState } from 'react';
import productsData from './data/product';
import ProductCard from './components/ProductCard';
import SwipeCard from './components/SwipeCard';
import { AnimatePresence } from 'motion/react';

function App() {
  const [products, setProducts] = useState(productsData);

  const handleSwipe = (action, id) => {
    console.log(`${action} Product ID: ${id}`);
    setProducts((prev) => prev.filter((product) => product.id !== id)); // Remove swiped product
  };

  // If there are no products left, show the message
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl text-gray-600">No more products left to swipe!</h2>
      </div>
    );
  }

  return (
    <AnimatePresence>
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {products.map((product, index) => (
        <SwipeCard
          key={product.id}
          id={product.id}
          index={index}
          total={products.length}
          onSwipe={handleSwipe}
        >
          <ProductCard product={product} />
        </SwipeCard>
      ))}
    </div>
    </AnimatePresence>
  );
}

export default App;
