import styles from '@system/HamburgerMenuButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { useModal } from '@system/providers/ModalContextProvider';

export default function HamburgerMenuButton(props) {
  const { showModal } = useModal();

  const [menuActive, setMenuActive] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);

  // (@xBalbinus): The hamburger menu gets closed on click to any outside HTML element if we only use
  // onOutsideEvent, we need to check if the click is coming from the hamburger button specifically.
  function toggleModal() {
    showModal({
      name: 'HAMBURGER_MENU',
      data: { navItems: props.navItems, menuActive, triggerElement: hamburgerRef.current },
    });
    setMenuActive((prev) => !prev);
  }

  return (
    <div className={styles.body}>
      <div
        ref={hamburgerRef}
        className={Utilities.classNames(styles.hamburger, { [styles.active]: menuActive })}
        onClick={toggleModal}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
