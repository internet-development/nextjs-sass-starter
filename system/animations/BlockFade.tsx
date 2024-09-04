'use client';

import styles from './BlockFade.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { FadeManagerContext } from './FadeManager';

export type FadeConfig = {
  delay?: number;
  duration?: number;
  angle?: number;
  distance?: number;
};

function BlockFade(props: FadeConfig & { children?: React.ReactNode }) {
  const id = React.useId();

  const { children } = props;

  const config: FadeConfig = { ...props };

  const fadeManager = React.useContext(FadeManagerContext);
  if (fadeManager) {
    fadeManager.register(id);

    const overrides = fadeManager.getConfig(id);
    Object.assign(config, Utilities.filterUndefined(overrides));
  }

  const { delay = 0, duration = 0, angle = 0, distance = 0 } = config;

  const initialX = Math.cos(angle) * distance;
  const initialY = Math.sin(angle) * distance;

  const vars = { '--fade-delay': `${delay}s`, '--fade-duration': `${duration}s`, '--fade-initial-x': `${initialX}px`, '--fade-initial-y': `${initialY}px` };

  return (
    <div id={id} className={styles.root} style={vars as React.CSSProperties}>
      {children}
    </div>
  );
}

export default BlockFade;
