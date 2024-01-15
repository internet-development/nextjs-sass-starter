import styles from '@components/clients/plvs/Navigation.module.scss';

import * as React from 'react';

import X from '@system/svg/social/X';
import PLVS from '@system/svg/clients/PLVS';

export default function Navigation(props) {
  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <div className={styles.left}>
          <a className={styles.boldLinkWeb} href="/clients/plvs">
            Protocol Lab Venture Studio
          </a>
          <a className={styles.boldLinkMobile} href="/clients/plvs">
            <PLVS height="16px" />
          </a>
        </div>
        <div className={styles.right}>
          <a className={styles.link} href="/clients/plvs/portfolio">
            Portfolio
          </a>
          <a className={styles.link} href="/clients/plvs/people">
            People
          </a>
          <a className={styles.link} href="/clients/plvs/blog">
            Blog
          </a>
          <a className={styles.link} href="https://twitter.com/protocollabs" target="_blank">
            <X height="16px" width="16px" />
          </a>
        </div>
      </nav>
    </div>
  );
}
