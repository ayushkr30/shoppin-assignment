// SwipeCard.jsx

import React from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const swipeConfidenceThreshold = 200;

const SwipeCard = ({ children, id, onSwipe, index, total }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-500, 500], [-15, 15]);

  // Stacking logic: Each card is stacked with a decreasing zIndex based on its position
  const zIndex = total - index;

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x;
    const offsetY = info.offset.y;

    if (offsetX > swipeConfidenceThreshold) {
      onSwipe('like', id);
    } else if (offsetX < -swipeConfidenceThreshold) {
      onSwipe('pass', id);
    } else if (offsetY < -swipeConfidenceThreshold) {
      onSwipe('cart', id);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="absolute cursor-grab"
        style={{ x, y, rotate, zIndex }} // Set zIndex based on stacking order
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: 'grabbing', scale: 1.1 }}
        exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.1, ease: "easeInOut" } }}
        transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.8}}
        animate={{ scale: 1, opacity: 1}}
        initial={{ scale: 0.95, opacity: 0.8}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwipeCard;
