import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoWebsitePrompt from '@demos/DemoWebsitePrompt';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';
import { ModalComponentV2 } from '@root/system/modals/GlobalModalManagerV2';

const ModalWebsitePrompt: ModalComponentV2 = (props) => {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent onOutsideEvent={() => props.close()} style={{ width: '100%', maxWidth: 568, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%' }}>
          <DemoWebsitePrompt />
        </div>
      </OutsideElementEvent>
    </div>
  );
};

export default ModalWebsitePrompt;