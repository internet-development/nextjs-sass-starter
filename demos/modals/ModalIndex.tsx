import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoIndex from '@demos/DemoIndex';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { ModalComponent } from '@root/system/modals/ModalContext';

export interface ModalIndexProps {
  content: any;
}

const ModalIndex: ModalComponent<ModalIndexProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent onOutsideEvent={() => props.onClose()} style={{ width: '100%', maxWidth: 568, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%' }}>
          <DemoIndex data={props.content.data} />
        </div>
      </OutsideElementEvent>
    </div>
  );
};

export default ModalIndex;
