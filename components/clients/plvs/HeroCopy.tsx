import styles from '@components/clients/plvs/HeroCopy.module.scss';

import * as React from 'react';

import PipelineIII from '@components/clients/plvs/svg/PipelineIII';

import { H1 } from '@components/clients/plvs/typography';

export default function HeroCopy(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.text}>
            <H1>We build startups driving breakthroughs in computing</H1>
          </div>
        </div>
      </div>
      <PipelineIII style={{ marginTop: 48, marginBottom: 48 }} width="100%" />
    </>
  );
}
