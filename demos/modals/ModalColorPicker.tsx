import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoColorPicker from '@demos/DemoColorPicker';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalColorPicker(props) {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent onOutsideEvent={() => props.onShowModal(null)} style={{ width: '100%', maxWidth: 288, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%' }}>
          <DemoColorPicker />
        </div>
      </OutsideElementEvent>
    </div>
  );
}
