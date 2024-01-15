import styles from '@components/clients/plvs/Hero.module.scss';

import * as React from 'react';

import PLVS from '@system/svg/clients/PLVS';

export default function Hero(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <PLVS height="64px" />
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
