import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';

import Link from 'next/link';

export default function ModalHamburgerMenu(props) {
  const navItems = props.content.data.navItems;
  
  return (
    <div className={`${styles.hamburgerModal} ${styles.slideIn}`}>
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
    </div>
  );
}
