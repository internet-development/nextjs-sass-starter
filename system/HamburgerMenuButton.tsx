import styles from '@system/HamburgerMenuButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import ModalHamburgerMenu from '@root/demos/modals/ModalHamburgerMenu';

import { useModals } from './modals/ModalContext';

export default function HamburgerMenuButton(props) {
  const modals = useModals();

  const [isAnimating, setIsAnimating] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const isActive = modals.active?.component === ModalHamburgerMenu;

  // (@xBalbinus): The hamburger menu gets closed on click to any outside HTML element if we only use
  // onOutsideEvent, we need to check if the click is coming from the hamburger button specifically.
  function toggleModal() {
    if (isAnimating) return;

    setIsAnimating(true);

    if (!isActive) {
      modals.open(ModalHamburgerMenu, {
        content: { data: { navItems: props.navItems } },
      });
    } else {
      modals.close();
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

  return (
    <div className={styles.body}>
      <div ref={hamburgerRef} className={Utilities.classNames(styles.hamburger, { [styles.active]: isActive })} onMouseDown={toggleModal}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
