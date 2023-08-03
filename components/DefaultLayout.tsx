import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function App(props) {
  return <div className={styles.body}>{props.children}</div>;
}
