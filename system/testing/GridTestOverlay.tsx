'use client';

import React, { useEffect, useState } from 'react';

interface GridLines {
  vertical: React.ReactNode[];
  horizontal: React.ReactNode[];
}

const GridTestOverlay: React.FC = () => {
  const [gridLines, setGridLines] = useState<GridLines>({ vertical: [], horizontal: [] });

  useEffect(() => {
    const generateGrid = () => {
      const vertical: React.ReactNode[] = [];
      const horizontal: React.ReactNode[] = [];
      const screenWidth = window.innerWidth;
      const bodyHeight = document.body.scrollHeight;

      for (let x = 0; x < screenWidth; x += 16) {
        vertical.push(
          <div
            key={`v-${x}`}
            style={{
              position: 'absolute',
              top: 0,
              left: `${x}px`,
              width: '1px',
              height: `${bodyHeight}px`,
              backgroundColor: 'rgba(255, 0, 0, 0.35)',
              pointerEvents: 'none',
            }}
          />
        );
      }

      for (let y = 0; y < bodyHeight; y += 16) {
        horizontal.push(
          <div
            key={`h-${y}`}
            style={{
              position: 'absolute',
              top: `${y}px`,
              left: 0,
              width: '100vw',
              height: '1px',
              backgroundColor: 'rgba(255, 0, 0, 0.35)',
              pointerEvents: 'none',
            }}
          />
        );
      }

      setGridLines({ vertical, horizontal });
    };

    generateGrid();
    window.addEventListener('resize', generateGrid);

    return () => window.removeEventListener('resize', generateGrid);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {gridLines.vertical}
      {gridLines.horizontal}
    </div>
  );
};

export default GridTestOverlay;
