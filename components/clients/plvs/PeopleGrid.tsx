import styles from '@components/clients/plvs/PeopleGrid.module.scss';

import * as React from 'react';
import Image from 'next/image';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <div className={styles.top}>
          <Image className={styles.image} src={props.src} alt={''} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.desc}>{props.title}</div>
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
        <Card name="Juan Benet" title="Global Leadership" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/22cf7dc1-95cb-4d71-85bd-7b3937e38030.png" />
        <Card name="Molly McKinlay" title="Global Leadership" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/0e841586-2f0a-4dfa-8bb4-a4316952d1d7.png" />
        <Card
          name="Ruben Amenyogbo"
          title="Global Leadership"
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/14972b2e-341b-4db9-bcf6-4c7bc07e87bb.png"
        />
        <Card name="Brad Holden" title="Global Leadership" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/a29b952f-7e46-4e49-8037-9480ecd6c246.png" />
        <Card name="Colin Evran" title="Global Leadership" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/51e5799e-ed70-48ca-ad69-3b6f3b0c1fac.png" />
        <Card
          name="Ashwanth Samuel"
          title="Operations Leadership"
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/079fcb2c-04b5-4232-a8c5-1d1de88df6d0.png"
        />
        <Card name="Andrew Woo" title="Operations Leadership" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/42d0723d-1c32-40b8-8dd1-bdcb39653def.png" />
        <Card
          name="Rachel Garcia"
          title="Operations Leadership"
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/41942819-8e59-4eb1-bf57-a208654277b0.png"
        />
        <Card name="Cathrine Hammack" title="Legal" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5e7fc299-245f-4721-8416-9258492903f1.png" />
        <Card
          name="Danielle Andrzejewski"
          title="Operations Leadership"
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/a8ba9191-93b8-4045-b540-1231bf50ea04.png"
        />
      </div>
    </>
  );
}
