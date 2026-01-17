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

