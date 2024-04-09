import styles from '@pages/clients/muddy/index.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

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

const Message = (props) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className={styles.message}>
      <div className={styles.messageLeft}>
        <div className={styles.messageTopLine} />
        <img className={styles.messageAvatar} src={props.src} alt="Avatar image" />
        <figure className={styles.messageBottomLine} />
      </div>
      <div className={styles.messageRight}>
        <div className={styles.messageName}>{props.name}</div>
        <div className={styles.messageByline}>Arrakis Loop ⎯ {Utilities.timeAgo(date)}</div>
        <div className={styles.messageContents}>{props.children}</div>
      </div>
    </div>
  );
};

const Window = (props) => {
  return (
    <div className={styles.window}>
      <div className={styles.windowHeader}>{props.title}</div>
      <div className={styles.windowContent}>{props.children}</div>
    </div>
  );
};

function ExampleClientsMuddy(props) {
  return (
    <Page title="nextjs-sass-starter: clients: muddy" description="for Muddy" url="https://wireframes.internet.dev/clients/muddy">
      <AnyTextHeader>Clients / Muddy</AnyTextHeader>
      <Section
        title="Use apps with your messages"
        description="We want the viewer to know that apps open inline with messages and load instantly. You can scroll through apps just like messages. Way faster than clicking on a link and opening a tab. iFrames have pointer events none so you can not interact."
      >
        <Message name="Lady Jessica Atreides" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/30f8b390-a0fc-43d3-ad07-6b3efe93e9dc.png">
          I must not fear. Fear is the mind-killer. Fear is the little death that brings obliteration. I will face my fear and I will permit it to pass over me and through me. And
          when it has gone past... I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.
          <Window title="https://cargo.site/">
            <iframe src="https://cargo.site/" width="100%" height="280" frameBorder="0"></iframe>
          </Window>
        </Message>

        <Message name="Stilgar" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1534d654-0e7c-4cb1-bc4c-00b2bd9e9bb0.png">
          Be simple, be direct.
        </Message>

        <Message name="Glossu Rabban" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/55d5b7ba-9b4a-4be5-916e-59be60991dba.png">
          how did we let this happen? How can the Emperor take everything we've built and give it to Ron and Jimmy? How?
          <Window title="https://godly.website">
            <iframe src="https://godly.website" width="100%" height="280" frameBorder="0"></iframe>
          </Window>
        </Message>

        <Message name="Liet Kynes" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/73b0e652-d11a-4178-b3e5-f691b235f877.png">
          He felt an offense against what his mother called his instinct for rightness. It wasn’t that Reverend Mother lied to him. She obviously believed what she said. It was
          something deeper, something tied to his terrible purpose.
          <Window title="https://blazetype.eu/">
            <iframe src="https://blazetype.eu/" width="100%" height="280" frameBorder="0"></iframe>
          </Window>
        </Message>
      </Section>
      <Section
        title="Always available support"
        description="MuddyAI has all of my team's context and can answer questions with it, it can also browse the web and look up the latest information, and it can send those websites back to me. iFrames have pointer events none so you can not interact."
      >
        <Message name="Glossu Rabban" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/55d5b7ba-9b4a-4be5-916e-59be60991dba.png">
          I NEED A BETTER FONT. I NEED IT NOW.
        </Message>

        <Message name="Muddy Buddy" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/74ce6c3f-4cc2-4b7d-9fee-62226e8cb32f.jpg">
          Okay Glossau Rabban, here is a Font from Kilm Type Foundry named Söhne. Söhne is the memory of Akzidenz-Grotesk framed through the reality of Helvetica. It captures the
          analogue materiality of “Standard Medium” used in Unimark’s legendary wayfinding system for the NYC Subway.
          <Window title="https://typographica.org/typeface-reviews/sohne/">
            <iframe src="https://typographica.org/typeface-reviews/sohne/" width="100%" height="280" frameBorder="0"></iframe>
          </Window>
        </Message>
      </Section>

      <Section
        title="Start disucssion everywhere"
        description="Talking on any website is fast and simple. When you want to, pointing to specific website content is easy. Everything lives in the same feed. No iframes will be used in this example."
      >
        ...
      </Section>

      <Section title="Invite flow" description="Example invite flow">
        ...
      </Section>

      <div style={{ paddingBottom: 128 }} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleClientsMuddy;
