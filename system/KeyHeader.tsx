import styles from '@system/KeyHeader.module.scss';

import * as React from 'react';

export default function KeyHeader(props) {
  if (props.isHidden) {
    return <nav className={styles.root} />;
  }

  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Toggle Theme
        </span>
      </section>

      <section className={styles.stretch}>
        <input
          autoComplete="off"
          className={styles.input}
          type="password"
          name="key"
          placeholder="Copy and paste your API key here!"
          value={props.value}
          onChange={(e) => props.onInputChange(e.target.value)}
        />
      </section>
    </nav>
  );
}
