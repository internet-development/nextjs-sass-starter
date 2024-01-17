import styles from '@components/clients/plvs/PortfolioGrid.module.scss';

import * as React from 'react';

import Ansa from '@system/svg/clients/Ansa';
import Web3Mine from '@system/svg/clients/Web3Mine';
import Station from '@system/svg/clients/Station';
import Expanso from '@system/svg/clients/Expanso';
import Banyan from '@system/svg/clients/Banyan';
import Lurk from '@system/svg/clients/Lurk';

import { H1 } from '@components/clients/plvs/typography';

function Card(props) {
  return (
    <a className={styles.card} href={props.href} target="_blank">
      <div className={styles.frame}>
        <div className={styles.top}>{props.children}</div>
        <div className={styles.bottom}>
          <div className={styles.companyName}>{props.title}</div>
          <div className={styles.companyDesc}>{props.description}</div>
        </div>
      </div>
    </a>
  );
}

export default function PortfolioGrid(props) {
  return (
    <>
      <section className={styles.portfolio}>
        <header className={styles.header}>
          <div className={styles.title}>PORTFOLIO</div>
          <div className={styles.corner}>8 projects</div>
        </header>
      </section>
      <div className={styles.grid}>
        <Card description="Ansa Research is a research firm focused on distributed infrastructure." title="Ansa Research" src="" href="https://ansaresearch.ai/">
          <Ansa height="96px" />
        </Card>
        <Card description="web3mine is an innovation lab that helps people collectively coordinate" title="web3mine" src="" href="https://www.web3mine.io/">
          <Web3Mine height="48px" />
        </Card>
        <Card description="Verifiable, unpredictable and unbiased random numbers as a service." title="drand" src="" href="https://drand.love/">
          <H1 style={{ textTransform: 'none' }}>drand</H1>
        </Card>
        <Card description="Station connects your computer’s idle resources to the Filecoin network." title="Station" href="https://www.filstation.app/">
          <Station height="48px" />
        </Card>
        <Card description="Runs jobs, utilizing local compute, and minimizing data throughput." title="Expanso" href="https://expanso.io/">
          <Expanso height="100px" />
        </Card>
        <Card description="Blockchain technology that powers planetary-scale web3 apps." title="IPC" src="" href="https://www.ipc.space/">
          <H1 style={{ textTransform: 'none' }}>IPC</H1>
        </Card>
        <Card description="Banyan bridges the gap between decentralized storage and all your data needs." title="Banyan" href="https://www.banyan.computer/">
          <Banyan height="48px" />
        </Card>
        <Card description="A Turing-complete programming language for Zero Knowledge Proofs." title="Lurk" href="https://lurk-lang.org/">
          <Lurk height="100px" />
        </Card>
      </div>
    </>
  );
}
