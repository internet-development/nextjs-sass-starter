import styles from '@system/HamburgerMenuButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { useModal } from '@system/providers/ModalContextProvider';

export default function HamburgerMenuButton(props) {
  const { modalContent, showModal } = useModal();

  const [menuActive, setMenuActive] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);

  // (@xBalbinus) The hamburger menu is a modal, and can get closed by other modals
  // Handle the case where the hamburger menu is closed by another modal or gets clicked outside of.
  React.useEffect(() => {
    if (modalContent?.name === 'HAMBURGER_MENU') {
      setMenuActive(true);
    } else if (modalContent?.name !== 'HAMBURGER_MENU') {
      setMenuActive(false);
    }
  }, [modalContent]);

  // (@xBalbinus): The hamburger menu gets closed on click to any outside HTML element if we only use
  // onOutsideEvent, we need to check if the click is coming from the hamburger button specifically.
  function toggleModal() {
    if (isAnimating) return;

    setIsAnimating(true);
    setMenuActive((prev) => !prev);
    showModal({
      name: 'HAMBURGER_MENU',
      data: { navItems: props.navItems, isActive: menuActive, triggerElement: hamburgerRef.current },
    });
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

  return (
    <div className={styles.body}>
      <div
        ref={hamburgerRef}
        className={Utilities.classNames(styles.hamburger, { [styles.active]: menuActive })}
        onMouseDown={toggleModal}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
