import React from 'react';

import Child from './Child';

const Parent = () => {
  const cendol = 2;

  return <Child value={cendol} />;
};

export default Parent;
