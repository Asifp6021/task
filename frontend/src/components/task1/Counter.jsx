import React, { useState } from 'react';

import './counter.css';

const Conter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const getColor = () => {
    const colors = ['red', 'green', 'yellow', 'purple', 'orange', 'violet', 'brown', 'pink'];
    const randomColors = Math.floor(Math.random() * colors.length);
    return colors[randomColors];
  };

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
    setColor(getColor());
  };

  return (
    <div className="container-main">
      <div className="container-one">
        <div className="container-two" style={{ backgroundColor: color }}>
          <h1>{count}</h1>
          <h3> click below button to increase count</h3>
        </div>
      </div>
      <button
        className="btn"
        onClick={handleCount}
        style={{ backgroundColor: color }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Conter;
