import styles from '@system/HamburgerMenuButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import ModalHamburgerMenu from '@root/demos/modals/ModalHamburgerMenu';

import { useModalV2 } from './modals/GlobalModalManagerV2';

export default function HamburgerMenuButton(props) {
  const modal = useModalV2(ModalHamburgerMenu);

  const [isAnimating, setIsAnimating] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);

  // (@xBalbinus): The hamburger menu gets closed on click to any outside HTML element if we only use
  // onOutsideEvent, we need to check if the click is coming from the hamburger button specifically.
  function toggleModal() {
    if (isAnimating) return;

    setIsAnimating(true);

    if (!modal.isActive) {
      modal.open({
        content: { data: { navItems: props.navItems } },
      });
    } else {
      modal.close();
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

  return (
    <div className={styles.body}>
      <div
        ref={hamburgerRef}
        className={Utilities.classNames(styles.hamburger, { [styles.active]: modal.isActive })}
        onMouseDown={toggleModal}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
