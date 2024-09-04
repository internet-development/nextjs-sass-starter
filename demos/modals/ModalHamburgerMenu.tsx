import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export default function ModalHamburgerMenu(props) {
  return (
    <OutsideElementEvent
      className={styles.modal}
      onOutsideEvent={() => props.onShowModal(null)}
      style={{ textAlign: 'left', top: 49, height: 'calc(100dvh - 49px)', width: 241, left: 0, boxShadow: 'none', borderRight: `1px solid var(--theme-border)`, borderRadius: 0 }}
    >
      <div className={styles.menuContent}>Hi Xiangan, you got this.</div>
    </OutsideElementEvent>
  );
}
