import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { H4 } from '@system/typography';
import Link from 'next/link';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export default function ModalHamburgerMenu(props) {
  const { navItems } = props;

  return (
    <OutsideElementEvent className={styles.modal} onOutsideEvent={() => {}}>
      {navItems.map((item) => (
        <div key={item.name} className={styles.menuContent}>
          <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <H4>{item.name}</H4>
          </Link>
        </div>
      ))}
    </OutsideElementEvent>
  );
}
