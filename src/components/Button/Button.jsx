import React from 'react';

function Button({ children = 'Explore' }) {
  return <button className="btn">{children}</button>;
}

export default Button;
