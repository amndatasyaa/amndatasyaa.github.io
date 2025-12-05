import React from 'react';
import { motion } from 'framer-motion';

interface BirdProps {
  birdPosition: { y: number };
}

const Bird: React.FC<BirdProps> = ({ birdPosition }) => {
  return (
    <motion.div
      className="bird"
      animate={{ y: birdPosition.y }}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--primary-color)',
        borderRadius: '50%',
        position: 'absolute',
        left: '100px',
        top: '0',
      }}
    />
  );
};

export default Bird;
