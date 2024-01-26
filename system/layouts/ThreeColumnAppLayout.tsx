import styles from '@system/layouts/ThreeColumnAppLayout.module.scss';

import * as React from 'react';

export default function ThreeColumnAppLayout(props) {
  return <div className={styles.root}>{props.children}</div>;
}
