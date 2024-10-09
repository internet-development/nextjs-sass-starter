import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoColorPicker from '@demos/DemoColorPicker';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { ModalComponent } from '@root/system/modals/ModalContext';

const ModalColorPicker: ModalComponent = (props) => {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent onOutsideEvent={() => props.onClose()} style={{ width: '100%', maxWidth: 288, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%' }}>
          <DemoColorPicker />
        </div>
      </OutsideElementEvent>
    </div>
  );
}

export default ModalColorPicker;