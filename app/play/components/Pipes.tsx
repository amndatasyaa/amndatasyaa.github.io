import React from 'react';
import { motion } from 'framer-motion';

interface Pipe {
  x: number;
  height: number;
}

interface PipesProps {
  pipes: Pipe[];
  pipeWidth: number;
  pipeGap: number;
}

const Pipes: React.FC<PipesProps> = ({ pipes, pipeWidth, pipeGap }) => {
  return (
    <>
      {pipes.map((pipe, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="pipe"
            style={{
              position: 'absolute',
              left: pipe.x,
              top: 0,
              width: pipeWidth,
              height: pipe.height,
              backgroundColor: 'var(--secondary-color)',
            }}
          />
          <motion.div
            className="pipe"
            style={{
              position: 'absolute',
              left: pipe.x,
              bottom: 0,
              width: pipeWidth,
              height: `calc(100vh - ${pipe.height + pipeGap}px)`,
              backgroundColor: 'var(--secondary-color)',
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Pipes;
