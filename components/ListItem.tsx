import styles from '@components/ListItem.module.scss';

import * as React from 'react';

export default function ListItem(props) {
  return (
    <li className={styles.item}>
      <span className={styles.column}>{props.isWIP ? '[WIP]' : null}</span>
      <span className={styles.column}>{props.isAuth ? '[AUTH]' : null}</span>
      <span className={styles.contentColumn}>
        <a className={styles.link} href={props.href}>
          {props.children}
        </a>
      </span>
    </li>
  );
}
