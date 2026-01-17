import styles from '@system/SkipLink.module.scss';

import * as React from 'react';

export interface SkipLinkProps {
  targetId: string;
  children?: React.ReactNode;
}

export default function SkipLink({ targetId, children = 'Skip to main content' }: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${targetId}`} className={styles.root} onClick={handleClick}>
      {children}
    </a>
  );
}

