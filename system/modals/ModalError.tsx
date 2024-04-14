import styles from '@system/modals/Modals.module.scss';

import * as React from 'react';

import Error from '@system/svg/Error';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { useModal } from '@system/providers/ModalContextProvider';

export default function ModalError(props) {
  const { showModal } = useModal();

  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent className={styles.errorModal} onOutsideEvent={() => showModal(null)}>
        <span className={styles.errorModalLeft}>
          <Error height="16px" />
        </span>
        <span className={styles.errorModalRight}>{props.message}</span>
      </OutsideElementEvent>
    </div>
  );
}
