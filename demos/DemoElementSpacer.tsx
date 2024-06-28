import styles from '@demos/DemoElementSpacer.module.scss';

import * as React from 'react';

export default function DemoElementSpacer(props) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>{props.left}</div>
      <div className={styles.middle} style={props.middleStyle}>
        {props.children}
      </div>
      <div className={styles.right}>{props.right}</div>
    </div>
  );
}
