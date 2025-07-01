import React from 'react';

function AttributePlaceSuggestion({ children = ' Best Interiors' }) {
  return <span className="attribute">{children}</span>;
}

export default AttributePlaceSuggestion;
