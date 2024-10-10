import styles from '@demos/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { ModalComponent } from '@root/system/modals/ModalContext';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export interface ModalNavigationProps {
  parentId?: string;
}

const ModalNavigation: ModalComponent<ModalNavigationProps> = (props) => {
  const style = Utilities.calculatePositionWithGutterById(props.parentId, MODAL_WIDTH, window.innerWidth, MODAL_GUTTER_OFFSET);

  return (
    <OutsideElementEvent className={styles.modal} onOutsideEvent={() => props.onClose()} style={{ textAlign: style.side as any, top: style.top, right: style.right }}>
      <span className={styles.item} onClick={() => Utilities.onHandleThemeChange()}>
        Rotate Theme
      </span>
      <a href="/examples/features/settings" className={styles.item}>
        Settings
      </a>
      <a href="/examples/features/services" className={styles.item}>
        Services
      </a>
      <a href="/examples/features/files-s3" className={styles.item}>
        Files
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
        INTDEV
      </a>
    </OutsideElementEvent>
  );
};

export default ModalNavigation;