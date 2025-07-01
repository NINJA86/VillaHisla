import React from 'react';
import Container from '../Container/Container';

export default function StatsHighlightSection({ leftContent, rightContent }) {
  return (
    <div className="bg-bg-section py-[120px]">
      <Container classes="flex items-center justify-between">
        {leftContent}
        {rightContent}
      </Container>
    </div>
  );
}
