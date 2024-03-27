import styles from '@components/Showcase.module.scss';

import * as React from 'react';

function generateAutoString(count: number): string {
  const autoArray = new Array(count).fill('auto');
  return autoArray.join(' ');
}

export default function Table(props) {
  return (
    <div className={styles.table} role="grid">
      <div className={styles.row} role="row">
        <div className={styles.cell}>
          <div className={styles.image} />
          <div className={styles.subtext}>[TBA]</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.image} />
          <div className={styles.subtext}>[TBA]</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.image} />
          <div className={styles.subtext}>[TBA]</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.image} />
          <div className={styles.subtext}>[TBA]</div>
        </div>
      </div>
    </div>
  );
}
