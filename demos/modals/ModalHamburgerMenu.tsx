import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';

import Link from 'next/link';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalHamburgerMenu(props) {
  const { navItems, onClose } = props;
  const [isVisible, setIsVisible] = React.useState(true);
  const [isUnmounting, setIsUnmounting] = React.useState(false);

  React.useEffect(() => {
    if (isUnmounting) {
      const modal = document.querySelector(`.${styles.modal}`);
      const handleAnimationEnd = () => {
        setIsVisible(false); 
        if (onClose) {
          onClose();
        }
      };
      
      modal?.addEventListener('animationend', handleAnimationEnd);
      return () => {
        modal?.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [isUnmounting, onClose]);

  function handleClose() {
    setIsUnmounting(true);
  }

  if (!isVisible) return null; // Unmount after animation finishes

  return (
    <OutsideElementEvent
      className={`${styles.modal} ${isUnmounting ? styles.slideOut : styles.slideIn}`}
      onOutsideEvent={handleClose}
    >
      {navItems.map((item) => (
        <div key={item.name} className={styles.menuContent}>
          <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <H4>{item.name}</H4>
          </Link>
        </div>
      ))}
    </OutsideElementEvent>
  );
}
