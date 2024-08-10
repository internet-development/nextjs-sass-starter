'use client';

import * as React from 'react';
import { FadeConfig } from './Fade';

export type FadeParamFn = (index: number) => number;
export type FadeParam = FadeParamFn | number;

interface FadeManagerConfig {
  delay: FadeParam;
  duration: FadeParam;
  angle: FadeParam;
  distance: FadeParam;
}

class FadeManagerObject {
  constructor(config?: FadeManagerConfig) {
    if (config) {
      Object.assign(this.config, config);
    }
  }

  entries: string[] = [];
  config: FadeManagerConfig = {
    delay: 0,
    duration: 0,
    angle: 0,
    distance: 0,
  };

  register(id) {
    if (this.entries.indexOf(id) === -1) {
      this.entries.push(id);
    }
  }

  unregister(id) {
    const index = this.entries.indexOf(id);
    this.entries.splice(index, 1);
  }

  evalParam(id, param: FadeParam): number {
    switch (typeof param) {
      case 'number':
        return param;
      case 'function':
        const index = this.entries.indexOf(id);
        return param(index);
      default:
        return 0;
    }
  }

  getConfig(id): FadeConfig {
    const { delay, duration, angle, distance } = this.config;
    return {
      delay: this.evalParam(id, delay),
      duration: this.evalParam(id, duration),
      angle: this.evalParam(id, angle),
      distance: this.evalParam(id, distance),
    };
  }
}

export const FadeManagerContext = React.createContext(new FadeManagerObject());

export type FadeManagerProps = Partial<FadeManagerConfig> & { children?: React.ReactNode };

export default function FadeManager(props: FadeManagerProps) {
  const { duration = 0, delay = 0, angle = 0, distance = 0 } = props;

  const manager = React.useRef(
    new FadeManagerObject({
      delay,
      duration,
      angle,
      distance,
    })
  );

  return <FadeManagerContext.Provider value={manager.current}>{props.children}</FadeManagerContext.Provider>;
}
