import React, { useState } from 'react';

import './child.css';

const Child = (props) => {
  const [value, setValue] = useState(props.value);

  const handleValue = () => {
    setValue((preValue) => preValue + 10);
  };

  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={handleValue}>click</button>
    </div>
  );
};

export default Child;
