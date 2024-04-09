import styles from '@pages/clients/muddy/index.module.scss';

import React from 'react';

import AnyTextHeader from '@components/AnyTextHeader';
import Page from '@components/Page';

const Section = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </header>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>{props.children}</div>
      </div>
    </>
  );
};

function ExampleClientsMuddy(props) {
  return (
    <Page title="nextjs-sass-starter: clients: muddy" description="for Muddy" url="https://wireframes.internet.dev/clients/muddy">
      <AnyTextHeader>Clients / Muddy</AnyTextHeader>
      <Section
        title="Use apps with your messages"
        description="We want the viewer to know that apps open inline with messages and load instantly. You can scroll through apps just like messages. Way faster than clicking on a link and opening a tab."
      >
        ...
      </Section>

      <Section
        title="Always available support"
        description="MuddyAI has all of my team's context and can answer questions with it, it can also browse the web and look up the latest information, and it can send those websites back to me."
      >
        ...
      </Section>

      <Section
        title="Start disucssion everywhere"
        description="Talking on any website is fast and simple. When you want to, pointing to specific website content is easy. Everything lives in the same feed."
      >
        ...
      </Section>

      <Section title="Invite flow" description="Example invite flow">
        ...
      </Section>
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleClientsMuddy;
