import styles from '@components/clients/plvs/PeopleGrid.module.scss';

import * as React from 'react';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
          <div className={styles.name}>Person</div>
          <div className={styles.desc}>Title</div>
          <div className={styles.social}>@xhandle</div>
          <div className={styles.website}>website.com</div>
        </div>
      </div>
    </div>
  );
}

export default function PeopleGrid(props) {
  return (
    <>
      <section className={styles.people}>
        <header className={styles.header}>
          <div className={styles.title}>PEOPLE</div>
          <div className={styles.corner}></div>
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
      </div>
    </>
  );
}
