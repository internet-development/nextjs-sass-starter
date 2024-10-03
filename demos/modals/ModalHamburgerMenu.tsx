import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';

import Link from 'next/link';
import OutsideElementEvent from '@root/system/detectors/OutsideElementEvent';
import { useModalV2 } from '@root/system/modals/GlobalModalManagerV2';

export interface ModalHamburgerMenuProps {
  content: {
    data: {
      navItems: { name: string, link: string }[],
    },
  };
}

export default function ModalHamburgerMenu(props: ModalHamburgerMenuProps) {
  const navItems = props.content.data.navItems;
  const modal = useModalV2(ModalHamburgerMenu);

  return (
    <OutsideElementEvent className={`${styles.hamburgerModal} ${styles.slideIn}`} onOutsideEvent={() => modal.close()}>
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
