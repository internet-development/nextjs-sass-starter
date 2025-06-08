import styles from '@demos/GradientButton.module.css';

import * as React from 'react';

const GradientButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={(className ? className + ' ' : '') + styles.button}>
      {children}
    </button>
  );
};
export default GradientButton;
