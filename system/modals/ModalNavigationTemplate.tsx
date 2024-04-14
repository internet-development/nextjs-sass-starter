import styles from '@system/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { useModal } from '@system/providers/ModalContextProvider';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export default function ModalNavigationTemplate(props) {
  const style = Utilities.calculatePositionWithGutter(props.parentRect, MODAL_WIDTH, window.innerWidth, MODAL_GUTTER_OFFSET);

  return (
    <OutsideElementEvent
      className={styles.modal}
      onOutsideEvent={() => showModal(null)}
      style={{
        textAlign: style.side,
        top: style.top,
        right: style.right,
      }}
    >
      <a href="/" className={styles.item}>
        Home
      </a>
      {props.viewer ? (
        <span className={styles.item} onClick={props.onSignOut}>
          Sign out
        </span>
      ) : (
        <>
          <a href="/examples/authentication-google" className={styles.item}>
            Sign in with Google
          </a>
          <a href="/examples/authentication" className={styles.item}>
            Sign in
          </a>
        </>
      )}
      <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
        Rotate Theme
      </span>
      <a href="/examples/settings" className={styles.item}>
        Settings
      </a>
      <hr className={styles.divider} />
      <a href="https://bsky.app/profile/internetstudio.bsky.social" className={styles.item} target="_blank">
        Bluesky
      </a>
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
