import styles from '@system/layouts/demos/DemoSettings.module.scss';

import * as React from 'react';

export default function DemoSettings(props) {
  return <div className={styles.root}>{props.children}</div>;
}
