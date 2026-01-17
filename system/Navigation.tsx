import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Logo from '@components/InternetDevelopmentLogo';
import ModalAuthentication from '@demos/modals/ModalAuthentication';
import ModalNavigationV2 from '@demos/modals/ModalNavigationV2';
import SkipLink from '@system/SkipLink';

import { useModals } from '@root/system/modals/ModalContext';

const MODAL_ID = 'modal-navigation';
const MODAL_AUTH_ID = 'modal-authentication';

export default function Navigation() {
  const modals = useModals();

  /**
   * Handles keyboard events for the theme toggle.
   * Activates on Enter or Space key to match native button behavior.
   */
  const handleThemeKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      Utilities.onHandleThemeChange();
    }
  };

  return (
    <nav className={styles.root}>
      <SkipLink />
      <div className={styles.top}>
        <a href="/" className={styles.left}>
          <Logo className={styles.logo} />
        </a>
        <span className={styles.stretch}></span>
        <span className={styles.right}>
          {/* 
            Theme toggle implemented as a span with button semantics.
            Using span instead of button to match existing styling patterns
            in this codebase. Full keyboard accessibility is provided via
            role, tabIndex, and onKeyDown attributes.
          */}
          <span
            className={styles.action}
            onClick={() => Utilities.onHandleThemeChange()}
            onKeyDown={handleThemeKeyDown}
            role="button"
            tabIndex={0}
          >
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
            data-detector-ignore-navigation
            id={MODAL_ID}
            onClick={() => {
              modals.open(ModalNavigationV2, { parentId: MODAL_ID });
            }}
          >
            Navigation
          </Button>
          <Button
            id={MODAL_AUTH_ID}
            onClick={() => {
              modals.open(ModalAuthentication, { parentId: MODAL_AUTH_ID });
            }}
          >
            Sign In
          </Button>
        </span>
      </div>
    </nav>
  );
}

