import styles from '@system/modals/Modals.module.scss';

import * as React from 'react';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

export default function ModalNavigation(props) {
  return (
    <OutsideElementEvent className={styles.modal} onOutsideEvent={props.onOutsideEvent}>
      <span className={styles.item} onClick={props.onHandleThemeChange}>
        Toggle Theme
      </span>
      <a href="#" className={styles.item}>
        Item II
      </a>
      <a href="#" className={styles.item}>
        Item III
      </a>
      <a href="#" className={styles.item}>
        Item IV
      </a>
      <hr className={styles.divider} />
      <a href="https://x.com/internetxstudio" className={styles.item} target="_blank">
        X
      </a>
      <a href="https://github.com/internet-development/nextjs-sass-starter" className={styles.item} target="_blank">
        GitHub
      </a>
      <a href="https://read.cv/teams/intdev" className={styles.item} target="_blank">
        ReadCV
      </a>
      <a href="https://internet.dev" className={styles.item} target="_blank">
        Website
      </a>
    </OutsideElementEvent>
  );
}
