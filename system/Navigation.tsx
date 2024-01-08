import styles from '@system/Navigation.module.scss';

import * as React from 'react';

export default function Navigation(props) {
  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <a href="#" className={styles.item}>
          Logo
        </a>
      </section>
      <section className={styles.stretch}>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Toggle Theme
        </span>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Item II
        </span>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Item III
        </span>
        <span className={styles.item} onClick={props.onHandleThemeChange}>
          Item IV
        </span>
      </section>
      <section className={styles.right}>
        <span className={styles.item} onClick={props.isModalVisible ? props.onHandleHideSubNavigation : props.onHandleShowSubNavigation} data-detector-ignore-navigation>
          Navigation
        </span>
      </section>
    </nav>
  );
}
