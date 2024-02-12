import styles from '@system/layouts/demos/DemoSettingsSidebar.module.scss';

import * as React from 'react';

export default function DemoSettingsSidebar(props) {
  return <div className={styles.root}>{props.children}</div>;
}
