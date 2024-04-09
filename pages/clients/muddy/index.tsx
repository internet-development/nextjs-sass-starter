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

const Checkmark = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

const Loading = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderStatus}>
        <Checkmark height="16px" />
      </div>
      <div className={styles.loaderText}>{props.children}</div>
    </div>
  );
};

function ExampleClientsMuddy(props) {
  return (
    <Page title="nextjs-sass-starter: clients: muddy" description="for Muddy" url="https://wireframes.internet.dev/clients/muddy">
      <AnyTextHeader>Clients / Muddy</AnyTextHeader>
      <Section
        title="Use apps with your messages"
        description="We want the viewer to know that apps open inline with messages and load instantly. You can scroll through apps just like messages. Way faster than clicking on a link and opening a tab. iFrames have pointer-events:none so you can not interact."
      >
        <Message name="Lady Jessica Atreides" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/30f8b390-a0fc-43d3-ad07-6b3efe93e9dc.png">
          I must not fear. Fear is the mind-killer. Fear is the little death that brings obliteration.{' '}
          <strong>I will face my fear and I will permit it to pass over me and through me.</strong> And when it has gone past... I will turn the inner eye to see its path. Where
          the fear has gone there will be nothing. Only I will remain.
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
        description="MuddyAI has all of my team's context and can answer questions with it, it can also browse the web and look up the latest information, and it can send those websites back to me. iFrames have pointer-events:none so you can not interact."
      >
        <Message name="Glossu Rabban" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/55d5b7ba-9b4a-4be5-916e-59be60991dba.png">
          I NEED A BETTER FONT. I NEED IT NOW. ARRAKIS IS MINE.
        </Message>

        <Message name="Muddy Buddy" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/74ce6c3f-4cc2-4b7d-9fee-62226e8cb32f.jpg">
          <Loading isFinished>Loading high pressure module ...</Loading>
          <Loading isFinished>Searching the web ...</Loading>
          <Loading isFinished>Eliminating remaining House Atreides prisoners ...</Loading>
          <Loading>Preparing to render font ...</Loading>
          <Loading>Rendering ...</Loading>

          <Window title="https://www.typewolf.com/sohne">
            <iframe src="https://www.typewolf.com/sohne" width="100%" height="280" frameBorder="0"></iframe>
          </Window>
        </Message>
      </Section>

      <Section
        title="Start disucssion everywhere"
        description="Talking on any website is fast and simple. When you want to, pointing to specific website content is easy. Everything lives in the same feed. No iframes will be used in this example."
      >
        <Message name="Stilgar" src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1534d654-0e7c-4cb1-bc4c-00b2bd9e9bb0.png">
          Great gods, if you could do this to the strongest of us, you're worth ten times your weight of water. As the leader of my people, I give you my bond. Teach us this
          weirding way and you both shall have sanctuary. Your water shall mingle with our water.
          <br />
          <br />
          You have strength. You shall be known as Muddy AI - which is the strength of the base of a Kubernetes cluster. This is your secret name in our troop. But, you must choose
          the name of manhood, which we will call you openly.
          <Window title="https://www.typewolf.com/sohne">
            <div className={styles.customWindow}>
              Paul Atreides, Jessica Atreides, Leto Atreides I, Leto Atreides II, Alia Atreides, Ghanima Atreides, Siona Atreides, Moneo Atreides, Anirul Corrino, Shaddam IV
              Corrino, Irulan Corrino, Wensicia Corrino, Farad'n Corrino, Hasimir Fenring, Margot Fenring, Feyd-Rautha Harkonnen, Vladimir Harkonnen, Glossu Rabban, Piter De Vries,
              Iakin Nefud, Staban Tuek, Esmar Tuek, Mapes, Thufir Hawat, Gurney Halleck, Duncan Idaho, Harah, Jamis, Chani, Stilgar, Liet-Kynes, Pardot Kynes, Warrick, Leah, Yueh,
              Wanna Marcus, Ertun, Geoff, Korba, Otheym, Lichna, Orlop, Rajifiri, Saajid, Farak, Ishmael, Charef, Bannerjee, Kynes, Kaleff, Jongleur, Drisq, Farok, Chatt, Orlop,
              Rajid, Javid, Assan Tariq, Buer Agarves, Cania Agarves, Drisq, Ommun, Jamis, Geoff, Shishakli, Turok, Ertun, Keke, Trava, Dhuri, Rajesh, Saajid, Farok, Ishmael,
              Charef, Bannerjee, Kynes, Kaleff, Jongleur, Otheym, Lichna, Chatt, Buer Agarves, Cania Agarves, Rajid, Javid, Assan Tariq, Korba, Ommun, Yekkey, Sardaukar, Boshar,
              Uli, Czigo, Merk, Aramsham, Tyekanik, Ziarenka, Palimbasha, Nefud, Beyta, Fash, Terbut, Zharal, Nari, Edric, Fash, Aramsham, Takim, Taros, Modibo, Buer, Cania, Geasa,
              Hobars, Koye, Lingar, Czigo, Uli, Sardaukar, Boshar, Yekkey, Beyta, Terbut, Nari, Edric, Buer, Cania, Geasa, Hobars, Keke, Trava, Dhuri, Rajesh, Otheym, Bannerjee,
              Kynes, Kaleff, Jongleur, Charef, Ishmael, Farok, Saajid, Chatt, Orlop, Rajid, Javid, Assan Tariq, Korba, Ertun, Ommun, Geoff, Jamis, Otheym, Lichna, Shishakli, Turok,
              Drisq, Ommun, Jamis, Geoff, Keke, Trava, Dhuri, Rajesh, Saajid, Farok, Ishmael, Charef, Bannerjee, Kynes, Kaleff, Jongleur, Otheym, Lichna, Chatt, Buer Agarves, Cania
              Agarves, Rajid, Javid, Assan Tariq, Korba, Ertun, Ommun, Yekkey, Sardaukar, Czigo, Uli, Aramsham, Beyta, Terbut, Nari, Edric, Buer, Cania, Geasa, Hobars, Nefud, Harq
              al-Ada, Bijaz, Javid, Namri.
            </div>
          </Window>
        </Message>
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
