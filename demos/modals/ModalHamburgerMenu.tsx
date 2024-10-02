import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';

import Link from 'next/link';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalHamburgerMenu(props) {
  const navItems = props.content.data.navItems;
  
  return (
    <OutsideElementEvent className={`${styles.hamburgerModal} ${styles.slideIn}`} onOutsideEvent={() => {}}>
      {navItems?.map((item) => (
        <div key={item.name} className={styles.menuContent}>
          {item.link ? (
            <Link href={item.link} className={styles.linkStyle}>
              <H4>{item.name}</H4>
            </Link>
          ) : (
            <H4>{item.name}</H4>
          )}
        </div>
      ))}
    </OutsideElementEvent>
  );
}
