import styles from '@components/clients/plvs/Footer.module.scss';

import * as React from 'react';

import PLVS from '@system/svg/clients/PLVS';

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <PLVS height="24px" />
      </div>
      <div className={styles.subtext}>
        <div className={styles.legal}>© PROTOCOL LABS VENTURE STUDIO 2024</div>
        <a href="/clients/plvs/disclosures" className={styles.legal}>
          Important disclosures
        </a>
      </div>
    </footer>
  );
}
