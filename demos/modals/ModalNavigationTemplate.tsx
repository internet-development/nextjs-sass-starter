import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { ModalComponentV2 } from '@system/modals/GlobalModalManagerV2';
import { ViewerContext } from '@components/Page';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export interface ModalNavigationTemplateProps {
  parentId?: string;
}

const ModalNavigationTemplate: ModalComponentV2<ModalNavigationTemplateProps> = (props) => {
  const style = Utilities.calculatePositionWithGutterById(props.parentId, MODAL_WIDTH, window.innerWidth, MODAL_GUTTER_OFFSET);
  const viewer = React.useContext(ViewerContext);

  return (
    <OutsideElementEvent
      className={styles.modal}
      onOutsideEvent={() => props.close()}
      style={{
        textAlign: style.side as any,
        top: style.top,
        right: style.right,
      }}
    >
      <a href="/" className={styles.item}>
        Home
      </a>
      {viewer ? (
        <span
          className={styles.item}
          onClick={() => {
            const confirm = window.confirm('Are you sure you want to sign out?');
            if (!confirm) {
              return;
            }

            Cookies.remove('sitekey');
            window.location.reload();
          }}
        >
          Sign out
        </span>
      ) : (
        <>
          <a href="/examples/features/authentication/google" className={styles.item}>
            Sign in with Google
          </a>
          <a href="/examples/features/authentication" className={styles.item}>
            Sign in
          </a>
        </>
      )}
      <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
        Rotate Theme
      </span>
      <a href="/examples/features/settings" className={styles.item}>
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
};

export default ModalNavigationTemplate;