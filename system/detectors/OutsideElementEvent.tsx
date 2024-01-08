import React, { useEffect, useRef } from 'react';

const OutsideElementEvent = ({ className, children, onOutsideEvent }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideEvent = (event) => {
    if (event.target.hasAttribute('data-detector-ignore-navigation')) {
      return;
    }

    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideEvent();
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideEvent);
    document.addEventListener('touchstart', handleOutsideEvent);

    return () => {
      document.removeEventListener('mousedown', handleOutsideEvent);
      document.removeEventListener('touchstart', handleOutsideEvent);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default OutsideElementEvent;
