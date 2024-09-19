import styles from '@system/MenuButton.module.scss';

import * as React from 'react';

import { useModal } from '@system/providers/ModalContextProvider';

export default function MenuButton(props) {
  const { showModal } = useModal();

  const [menuActive, setMenuActive] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);

  // (@xBalbinus): The hamburger menu gets closed on click to any outside HTML element if we only use
  // onOutsideEvent, we need to check if the click is coming from the hamburger button specifically.
  function toggleModal() {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle(styles.active);
    }
    showModal({
      name: 'HAMBURGER_MENU',
      data: { navItems: props.navItems, triggerElement: hamburgerRef.current },
      unmountDelay: 300,
    });
    setMenuActive(!menuActive);
  }

  return (
    <div className={styles.body}>
      <div ref={hamburgerRef} className={styles.hamburger} onClick={toggleModal}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
