import styles from '@system/documents/ActionItem.module.scss';

import * as React from 'react';

export default function ActionItem(props) {
  if (props.href) {
    return (
      <a className={styles.item} href={props.href} target={props.target} style={props.style}>
        <figure className={styles.icon}>{props.icon}</figure>
        <span className={styles.text}>{props.children}</span>
      </a>
    );
  }

  return (
    <div className={styles.item} onClick={props.onClick} style={props.style}>
      <figure className={styles.icon}>{props.icon}</figure>
      <span className={styles.text}>{props.children}</span>
    </div>
  );
}
