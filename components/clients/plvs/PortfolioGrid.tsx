import styles from '@components/clients/plvs/PortfolioGrid.module.scss';

import * as React from 'react';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
          <div className={styles.companyName}>Company Name</div>
          <div className={styles.companyDesc}>A company that is part of PLVS</div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid(props) {
  return (
    <>
      <section className={styles.portfolio}>
        <header className={styles.header}>
          <div className={styles.title}>PORTFOLIO</div>
          <div className={styles.corner}>18 projects</div>
        </header>
      </section>
      <div className={styles.grid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
