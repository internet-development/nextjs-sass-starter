import styles from '@pages/clients/muddy/index.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import AnyTextHeader from '@components/AnyTextHeader';
import DemoInviteFlow from '@system/layouts/demos/DemoInviteFlow';
import Page from '@components/Page';

function ExampleClientsMuddy(props) {
  return (
    <Page title="nextjs-sass-starter: clients: muddy" description="for Muddy" url="https://wireframes.internet.dev/clients/muddy">
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.wrapper}>
            <div className={styles.logo}></div>
            <div className={styles.items}></div>
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.previewContent}>
                <h1 className={styles.h1}>Become more efficient with your team.</h1>
                <p className={styles.p}>
                  Stop fumbling through tabs and drowning in chat. Muddy is a new kind of workplace. It's applications, messaging, and intelligence for ambitious teams.
                </p>
              </div>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>

        <div className={styles.testimonials}></div>

        <div className={styles.previewOne}>
          <div className={styles.previewWrapper}>
            <div className={styles.previewOneLeft}></div>
            <div className={styles.previewOneRight}>
              <div className={styles.previewContent}>
                <h2 className={styles.h2}>Use every app inside your conversations.</h2>
                <p className={styles.p}>
                  No more clicking through a wall of blue links. Muddy loads files as part of your message so everyone can get right to the important stuff.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.previewTwo}>
          <div className={styles.previewWrapper}>
            <div className={styles.previewTwoLeft}>
              <div className={styles.previewContent}>
                <h2 className={styles.h2}>Use every app inside your conversations.</h2>
                <p className={styles.p}>
                  No more clicking through a wall of blue links. Muddy loads files as part of your message so everyone can get right to the important stuff.
                </p>
              </div>
            </div>
            <div className={styles.previewTwoRight}></div>
          </div>
        </div>

        <div className={styles.previewThree}>
          <div className={styles.previewWrapper}>
            <div className={styles.previewThreeLeft}></div>
            <div className={styles.previewThreeRight}>
              <div className={styles.previewContent}>
                <h2 className={styles.h2}>
                  Your new favorite
                  <br />
                  browser
                </h2>
                <p className={styles.p} style={{ paddingLeft: 0, marginTop: `32px` }}>
                  No compromise. Every application, website, and extension just works in Muddy. All your favorite shortcuts, workflows, and more. You'll never have to keep
                  fliipping through windows at work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.previewFour}>
          <div className={styles.previewWrapper}>
            <div className={styles.previewFourLeft}>
              <div className={styles.previewContent}>
                <h2 className={styles.h2}>Use every app inside your conversations.</h2>
                <p className={styles.p}>
                  No more clicking through a wall of blue links. Muddy loads files as part of your message so everyone can get right to the important stuff.
                </p>
              </div>
            </div>
            <div className={styles.previewFourRight}></div>
          </div>
        </div>

        <div className={styles.faq}>
          <div className={styles.thinWrapper}>
            <h2 className={styles.faqH2}>FAQs</h2>

            <h3 className={styles.faqH3}>Can I use Slack and Muddy?</h3>

            <p className={styles.faqP}>
              Yes, if you want to. For smaller teams you’ll be much happier just using Muddy. If you work at a bigger company or depend on Slack Connect, we have a Slack app that
              automatically brings your stuff over and keeps you connected. Like any app, Slack also works inside of Muddy.
            </p>

            <h3 className={styles.faqH3}>What apps does Muddy Support?</h3>

            <p className={styles.faqP}>
              Anything that works inside of your browser today, which basically means everything. We support every modern browser dependency and API, so unlike many “browsers”
              there won’t be any change in performance or behavior.
            </p>

            <h3 className={styles.faqH3}>How does Muddy manage my privacy?</h3>

            <p className={styles.faqP}>
              All your cookies and passwords are stored locally. We’ll never your information because we monetize against selling add on services, not ads. Only the things you
              explicitly share with others are accessible to them, and only them.
            </p>

            <h3 className={styles.faqH3}>Does opening all those apps make my computer slow</h3>

            <p className={styles.faqP}>
              Muddy takes care of app and tab management for you! Because we know what spaces you’re working in and what your team cares about at any given moment, we’re able to
              keep the most interesting files hot and turn off the rest when you’re done. When you return, everything loads up just as you left it.
            </p>
          </div>
        </div>

        <div className={styles.conversion}>
          <div className={styles.wrapper}>
            <div className={styles.conversionHero}>
              <div className={styles.conversionContent}>
                <h2 className={styles.conversionHeroH2}>
                  Rescue your team from
                  <br />
                  work about work
                </h2>
                <button className={styles.buttonLarge} style={{ marginTop: `1rem` }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerSocial}></div>
          <div className={styles.footerLinks}>
            <span className={styles.text}>&copy; 2024 San Francisco Sailing Club</span>
            <a className={styles.item} href="#">
              X
            </a>
            <a className={styles.item} href="#">
              Privacy
            </a>
            <a className={styles.item} href="#">
              Terms
            </a>
            <a className={styles.item} href="#">
              Cookies
            </a>
          </div>
        </footer>
      </div>
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleClientsMuddy;
