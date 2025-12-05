import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      className="background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--bg-color)',
        zIndex: -1,
      }}
    />
  );
};

export default Background;
