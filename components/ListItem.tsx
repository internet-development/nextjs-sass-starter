import styles from '@components/ListItem.module.scss';

import * as React from 'react';

export default function ListItem(props) {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={props.href}>
        {props.children}
      </a>
    </li>
  );
}
