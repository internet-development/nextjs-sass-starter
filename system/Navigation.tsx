import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Logo from '@components/InternetDevelopmentLogo';
import ModalNavigationV2 from '@demos/modals/ModalNavigationV2';
import SkipLink from '@system/SkipLink';

import { useModals } from '@root/system/modals/ModalContext';

// MODAL_ID is used for focus return and modal parenting when the navigation modal is opened
const MODAL_ID = 'modal-navigation';

export default function Navigation() {
  const modals = useModals();

  return (
    <nav className={styles.root}>
      <SkipLink />
      <div className={styles.top}>
        <a href="/" className={styles.left}>
          <Logo className={styles.logo} />
        </a>
        <span className={styles.stretch}></span>
        <span className={styles.right}>
          <span className={styles.action} onClick={() => Utilities.onHandleThemeChange()}>
            Theme
          </span>
          <a className={styles.link} href="/examples/features/settings">
            Settings
          </a>
          <a className={styles.link} href="/examples/features/services">
            Services
          </a>
          <a className={styles.link} href="/examples/features/files-s3">
            Files
          </a>
          <Button
            id={MODAL_ID}
            onClick={() => {
              modals.open(ModalNavigationV2, { parentId: MODAL_ID });
            }}
          >
            Index
          </Button>
          <a className={styles.link} href="/examples/features/authentication">
            Sign In
          </a>
        </span>
      </div>
    </nav>
  );
}

