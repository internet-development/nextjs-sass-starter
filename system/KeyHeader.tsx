import styles from '@system/KeyHeader.module.scss';

import * as React from 'react';

export default function Navigation(props) {
  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Toggle Theme
        </span>
      </section>
      <section className={styles.stretch}>
        <input className={styles.input} type="password" placeholder="Copy and paste your API key here!" value={props.value} onChange={(e) => props.onInputChange(e.target.value)} />
      </section>
    </nav>
  );
}
