import styles from '@system/modals/Modals.module.scss';

import * as React from 'react';

import Error from '@system/svg/Error';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalError(props) {
  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent className={styles.errorModal} onOutsideEvent={() => props.onShowModal(null)}>
        <span className={styles.errorModalLeft}>
          <Error height="16px" />
        </span>
        <span className={styles.errorModalRight}>{props.content.message}</span>
      </OutsideElementEvent>
    </div>
  );
}
