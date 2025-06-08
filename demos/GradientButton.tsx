import React from 'react';

import styles from './GradientButton.module.css';

export const GradientButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={(className ? className + ' ' : '') + styles.button}>
      {children}
    </button>
  );
};
