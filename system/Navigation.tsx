import styles from '@system/Navigation.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Logo from '@components/InternetDevelopmentLogo';
import ModalNavigation from '@demos/modals/ModalNavigation';
import SkipLink from '@system/SkipLink';

import { useModals } from '@root/system/modals/ModalContext';

const MODAL_ID = 'modal-navigation';

export default function Navigation(props) {
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
          <Button
            id={MODAL_ID}
            onClick={() => {
              modals.open(ModalNavigation, { parentId: MODAL_ID });
            }}
          >
            Options
          </Button>
        </span>
      </div>
    </nav>
  );
}

