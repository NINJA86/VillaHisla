import React from 'react';

function Container({ classes = '', children }) {
  return (
    <div style={{}} className={`container mx-auto ${classes}`}>
      {children}
    </div>
  );
}

export default Container;
