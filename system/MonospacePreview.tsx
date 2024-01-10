import styles from '@system/MonospacePreview.module.scss';

import * as React from 'react';

export default function MonospacePreview(props) {
  return (
    <div className={styles.root} style={props.style}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.children}>{props.children}</div>
    </div>
  );
}
