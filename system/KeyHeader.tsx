import styles from '@system/KeyHeader.module.scss';

import * as React from 'react';

import Cookies from 'js-cookie';

export default function KeyHeader(props) {
  if (props.isHidden) {
    return <nav className={styles.root} />;
  }

  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <span
          className={styles.item}
          data-detector-ignore-navigation
          id="site-navigation-button"
          onClick={props.isModalVisible ? props.onHandleHideSubNavigation : props.onHandleShowSubNavigation}
        >
          Menu
        </span>
      </section>

      <section className={styles.stretch}>
        <input
          autoComplete="off"
          className={styles.input}
          type="password"
          name="key"
          placeholder="« Use an API key to instantly authenticate »"
          value={props.value}
          onChange={(e) => {
            Cookies.remove('sitekey');
            props.onInputChange(e.target.value);
          }}
        />
      </section>
    </nav>
  );
}
