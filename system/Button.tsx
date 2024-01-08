import styles from '@system/Button.module.scss';

import * as Button from 'react';

export default function Button(props) {
  return <button className={styles.root}>{props.children}</button>;
}
