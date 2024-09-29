import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';

import Link from 'next/link';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalHamburgerMenu(props) {
  const navItems = props.content.data.navItems;
  const triggerElement = props.content.data.triggerElement;

  const [isUnmounting, setIsUnmounting] = React.useState(false);

  function handleClose() {
    setIsUnmounting(true);
  }

  const animationClass = isUnmounting ? styles.slideOut : styles.slideIn;

  return (
    <OutsideElementEvent className={`${styles.hamburgerModal} ${animationClass}`} onOutsideEvent={handleClose} triggerElement={triggerElement}>
      {navItems?.map((item) => (
        <div key={item.name} className={styles.menuContent}>
          <Link href={item.link} className={styles.linkStyle}>
            <H4>{item.name}</H4>
          </Link>
        </div>
      ))}
    </OutsideElementEvent>
  );
}
