import styles from '@system/Navigation.module.scss';

import * as React from 'react';

export default function Navigation(props) {
  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <a href="/" className={styles.item}>
          Logo
        </a>
      </section>
      <section className={styles.stretch}>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Toggle Theme
        </span>
        <a className={styles.item} href="#">
          Item II
        </a>
        <a className={styles.item} href="#">
          Item III
        </a>
        <a className={styles.item} href="#">
          Item IV
        </a>
      </section>
      <section className={styles.right}>
        <span className={styles.item} onClick={props.isModalVisible ? props.onHandleHideSubNavigation : props.onHandleShowSubNavigation} data-detector-ignore-navigation>
          Navigation
        </span>
      </section>
    </nav>
  );
}
