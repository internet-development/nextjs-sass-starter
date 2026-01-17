import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import SkipLink from '@system/SkipLink';

import { useModals } from '@system/modals/ModalContext';

import ModalNavigation from '@demos/modals/ModalNavigation';

export interface NavigationProps {
  skipLinkTargetId?: string;
}

export default function Navigation({ skipLinkTargetId }: NavigationProps) {
  const modals = useModals();

  return (
    <nav className={styles.root}>
      {skipLinkTargetId && <SkipLink targetId={skipLinkTargetId} />}
      <section className={styles.left}>
        <a href="/" className={styles.item}>
          ✶ INTDEV
        </a>
      </section>
      <section className={styles.stretch} />
      <section className={styles.right}>
        <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
          Theme
        </span>
        <a className={styles.item} href="/examples">
          Index
        </a>
        <span
          className={styles.item}
          id="site-navigation-button"
          onClick={() => {
            modals.open(ModalNavigation, { parentId: 'site-navigation-button' });
          }}
        >
          ✳ Options
        </span>
      </section>
    </nav>
  );
}

