'use client';

import * as React from 'react';

interface FadeManagerConfig {
  initialDelay: number;
  interval: number;
  duration: number;
}

class FadeManagerObject {
  constructor(config?: FadeManagerConfig) {
    if (config) {
      Object.assign(this.config, config);
    }
  }

  entries: string[] = [];
  config: FadeManagerConfig = {
    duration: 0,
    initialDelay: 0,
    interval: 0,
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

  getDelay(id): number {
    const { initialDelay, interval } = this.config;

    const index = this.entries.indexOf(id);
    return initialDelay + interval * index;
  }

  getDuration(id): number {
    return this.config.duration;
  }
}

export const FadeManagerContext = React.createContext(new FadeManagerObject());

export type FadeManagerProps = Partial<FadeManagerConfig> & { children?: React.ReactNode };

export default function FadeManager(props: FadeManagerProps) {
  const { interval = 0, duration = 0, initialDelay = 0 } = props;

  const manager = React.useRef(
    new FadeManagerObject({
      interval,
      duration,
      initialDelay,
    })
  );

  return <FadeManagerContext.Provider value={manager.current}>{props.children}</FadeManagerContext.Provider>;
}
