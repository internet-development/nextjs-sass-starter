'use client';

import React from 'react';
import styles from './Fade.module.scss';
import { FadeManagerContext } from './FadeManager';

function Fade(props: { xVel?: number, yVel?: number, duration?: number, delay?: number, children?: React.ReactNode }) {
  const id = React.useId();

  let duration = props.duration;
  let delay = props.delay;
  
  const fadeManager = React.useContext(FadeManagerContext);
  if (fadeManager) {
    fadeManager.register(id);
    
    if (duration === undefined) {
      duration = fadeManager.getDuration(id);
    }

    if (delay === undefined) {
      delay = fadeManager.getDelay(id);
    }
  }

  const vars = {'--fade-delay': `${delay}s`, '--fade-duration': `${duration}s`};

  return <div id={id} className={styles.root} style={vars as React.CSSProperties}>{props.children}</div>;
}

export default Fade;