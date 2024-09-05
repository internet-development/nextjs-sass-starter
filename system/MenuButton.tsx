import styles from '@system/MenuButton.module.scss';

import * as React from 'react';

import { useModal } from '@system/providers/ModalContextProvider';

export default function MenuButton(props) {
  const { showModal } = useModal();

  const [menuActive, setMenuActive] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);

  function toggleModal() {
    showModal({
      name: 'HAMBURGER_MENU',
      data: [],
    }, 300);
  }

  const mobileMenuOnClickHandler = () => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle(styles.active);
    }
    if (!menuActive) {
      toggleModal();
      setMenuActive(true);
    } else {
      toggleModal();
      setMenuActive(false);
    }
  };

  React.useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuActive]);

  return (
    <div className={styles.body}>
      <div ref={hamburgerRef} className={styles.hamburger} onClick={mobileMenuOnClickHandler}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
