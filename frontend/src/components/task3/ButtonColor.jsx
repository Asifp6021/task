import React, { useState } from 'react';

import './buttonColor.css';

const ButtonColor = () => {
  const [value, setValue] = useState(true);

  const haandleValue = () => {
    setValue((preValue) => !preValue);
  };

  const style = {
    backgroundColor: value ? 'red' : 'blue'
  };

  return (
    <div className="container">
      <button className="container-btn" onClick={haandleValue} style={style}> {value ? 'true' : 'false'} </button>
    </div>
  );
};

export default ButtonColor;
