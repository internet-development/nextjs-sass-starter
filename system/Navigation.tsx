import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import SkipToContent from '@system/SkipToContent';

import { useModals } from '@system/modals/ModalContext';

import ModalNavigation from '@demos/modals/ModalNavigation';

export default function Navigation(props) {
  const modals = useModals();

  return (
    <nav className={styles.root}>
      <SkipToContent />
      <section className={styles.left}>
        <a href="/" className={styles.item}>
          ✶ INTDEV
        </a>
        <a href="/examples" className={styles.item}>
          Examples
        </a>
        <a href="https://github.com/internet-development/nextjs-sass-starter" className={styles.item} target="_blank">
          GitHub
        </a>
      </section>
      <section className={styles.stretch} />
      <section className={styles.right}>
        <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
          Theme
        </span>
        <span
          className={styles.item}
          id="site-navigation-button"
          onClick={() => {
            modals.open(ModalNavigation, { parentId: 'site-navigation-button' });
          }}
        >
          ☰
        </span>
      </section>
    </nav>
  );
}

