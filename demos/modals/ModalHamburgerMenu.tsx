import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import Link from 'next/link';
import OutsideElementEvent from '@root/system/detectors/OutsideElementEvent';

import { H4 } from '@system/typography';
import { CommonModalProps, ModalComponentV2, useModalV2 } from '@root/system/modals/GlobalModalManagerV2';

export interface ModalHamburgerMenuProps {
  content: {
    data: {
      navItems: { name: string; link: string }[];
    };
  };
}

const ModalHamburgerMenu: ModalComponentV2<ModalHamburgerMenuProps> = (props) => {
  const navItems = props.content.data.navItems;

  return (
    <OutsideElementEvent className={styles.hamburgerModal} onOutsideEvent={() => props.close()} style={{ animationDirection: !props.isClosing ? 'normal' : 'reverse' }}>
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
};

ModalHamburgerMenu.unmountDelayMS = 300;

export default ModalHamburgerMenu;
