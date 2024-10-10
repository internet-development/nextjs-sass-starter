import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import Link from 'next/link';
import OutsideElementEvent from '@root/system/detectors/OutsideElementEvent';

import { H4 } from '@system/typography';
import { CommonModalProps, ModalComponent, useModals } from '@root/system/modals/ModalContext';

export interface ModalHamburgerMenuProps {
  content: {
    data: {
      navItems: { name: string; link: string }[];
    };
  };
}

const ModalHamburgerMenu: ModalComponent<ModalHamburgerMenuProps> = React.forwardRef((props, ref) => {
  const navItems = props.content.data.navItems;

  React.useImperativeHandle(ref, () => ({
    getUnmountDelayMS: () => 200,
  }));

  return (
    <OutsideElementEvent className={styles.hamburgerModal} onOutsideEvent={() => props.onClose()} style={{ animationDirection: !props.isClosing ? 'normal' : 'reverse' }}>
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
});

export default ModalHamburgerMenu;
