import styles from '@system/KeyHeader.module.scss';

import * as React from 'react';

import Cookies from 'js-cookie';
import ModalNavigationTemplate from '@demos/modals/ModalNavigationTemplate';

import { useModal } from '@system/modals/ModalContext';

export interface KeyHeaderProps {
  isHidden?: boolean;
  value: any;
  onInputChange: (value: string) => void;
}

export default function KeyHeader(props: KeyHeaderProps) {
  const modal = useModal();

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
          onClick={() => modal.open(ModalNavigationTemplate, { parentId: 'site-navigation-button' })}
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
