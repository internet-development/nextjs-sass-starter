import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';

import Error from '@system/svg/Error';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { ModalComponentV2 } from '@root/system/modals/GlobalModalManagerV2';

export interface ModalErrorProps {
  message: any
}

const ModalError: ModalComponentV2<ModalErrorProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent className={styles.errorModal} onOutsideEvent={() => props.close()}>
        <span className={styles.errorModalLeft}>
          <Error height="16px" />
        </span>
        <span className={styles.errorModalRight}>{props.message}</span>
      </OutsideElementEvent>
    </div>
  );
}

export default ModalError;