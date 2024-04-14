import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { useModal } from '@system/providers/ModalContextProvider';

export default function Navigation() {
  const { showModal } = useModal();

  return (
    <nav className={styles.root}>
      <section className={styles.left}>
        <a href="/" className={styles.item}>
          Logo
        </a>
      </section>
      <section className={styles.stretch}>
        <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
          Rotate Theme
        </span>
        <a className={styles.item} href="/examples/settings">
          Settings
        </a>
        <a className={styles.item} href="/examples/services">
          Services
        </a>
        <a className={styles.item} href="/examples/files">
          Files
        </a>
      </section>
      <section className={styles.right}>
        <span
          className={styles.item}
          id="site-navigation-button"
          onClick={() => showModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
          data-detector-ignore-navigation
        >
          Navigation
        </span>
      </section>
    </nav>
  );
}
