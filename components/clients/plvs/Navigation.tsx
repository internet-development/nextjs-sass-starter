import styles from '@components/clients/plvs/Navigation.module.scss';

import * as React from 'react';

import Twitter from '@system/svg/social/Twitter';
import PLVS from '@system/svg/clients/PLVS';
import Link from 'next/link';

export default function Navigation(props) {
  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <div className={styles.left}>
          {!props.hideLogo ? (
            <Link className={styles.boldLinkWeb} href="/clients/plvs">
              <PLVS height="16px" />
            </Link>
          ) : null}
          {!props.hideLogo ? (
            <Link className={styles.boldLinkMobile} href="/clients/plvs">
              <PLVS height="16px" />
            </Link>
          ) : null}
        </div>
        <div className={styles.right}>
          <Link className={styles.link} href="/clients/plvs/portfolio">
            Portfolio
          </Link>
          <Link className={styles.link} href="/clients/plvs/people">
            People
          </Link>
          <Link className={styles.link} href="/clients/plvs/blog">
            Blog
          </Link>
          <a className={styles.link} href="https://twitter.com/protocollabs" target="_blank">
            <Twitter height="16px" width="16px" />
          </a>
        </div>
      </nav>
    </div>
  );
}
