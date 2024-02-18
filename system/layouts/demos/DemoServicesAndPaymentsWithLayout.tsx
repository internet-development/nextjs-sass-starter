import styles from '@system/layouts/demos/DemoServicesAndPaymentsWithLayout.module.scss';

import * as React from 'react';

import Button from '@system/Button';
import Checkmark from '@system/svg/Checkmark';
import Content from '@system/layouts/Content';

import { H2, H2Sub, H3, H3Sub, P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const Item = (props) => {
  return (
    <div className={styles.item}>
      <span className={styles.left}>
        <Checkmark height="16px" />
      </span>
      <span className={styles.right}>{props.children}</span>
    </div>
  );
};

export default function DemoBentoLayout(props) {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.top}>
          <H2>Get access to our offering</H2>
          <H3Sub style={{ maxWidth: '768px' }}>
            The{' '}
            <a className={styles.link} href="https://internet.dev">
              Internet Development Studio Company
            </a>{' '}
            invites you to use all of our services. Those services include API endpoints, developer tooling, reliable file storage, document generation tools, and even physical
            collaboration space.
          </H3Sub>
        </section>
      </header>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.content}>
              <FormHeading>Free</FormHeading>
              <FormParagraph style={{ minHeight: 156 }}>
                The quickest and easiest way to use our API service, products and games. All you need is a verified e-mail address.
              </FormParagraph>
              <H2 style={{ marginTop: 24 }}>
                $0 USD<span className={styles.subtle}>/mo</span>
              </H2>
              <Button onClick={() => alert('Coming soon!')} style={{ height: 48, marginTop: 24, width: '100%' }} href="/examples/authentication">
                Sign up
              </Button>
              <FormParagraph style={{ opacity: 0, visibility: 'hidden', minheight: 48 }}>An invisible placeholder. Words that will occupy space.</FormParagraph>
              <div>
                <Item>Generate up to 5 documents using our templates.</Item>
                <Item>Create up to 3 surveys.</Item>
                <Item>Access to all free APIs, products, and games.</Item>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <FormHeading>Professional</FormHeading>
              <FormParagraph style={{ minHeight: 156 }}>
                More power and utility for anyone who needs it. Access to all of our products including a personal blog and newsletter tool.
              </FormParagraph>
              <H2 style={{ marginTop: 24 }}>
                $8.99 USD<span className={styles.subtle}>/mo</span>
              </H2>
              <Button onClick={() => alert('Coming soon!')} style={{ height: 48, marginTop: 24, width: '100%' }}>
                Get started
              </Button>
              <FormParagraph style={{ minHeight: 48 }}>
                All the benefits of the <strong>"Free"</strong>, and:
              </FormParagraph>
              <div>
                <Item>15,000 credits deposited every month.</Item>
                <Item>Free personal blog on TXT.DEV.</Item>
                <Item>Access to all new products and games.</Item>
                <Item>No limits.</Item>
                <Item>Create any additional document for 100 credits each.</Item>
                <Item>Create any additional survey for 100 credits each.</Item>
                <Item>Upload any file* for 1000 credits each.</Item>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <FormHeading>Collaborator</FormHeading>
              <FormParagraph style={{ minHeight: 156 }}>
                Requires an invitation from our community. Get a reserved desk** and access to new products as they are released.
              </FormParagraph>
              <H2 style={{ marginTop: 24 }}>
                $399 USD<span className={styles.subtle}>/mo</span>
              </H2>
              <Button onClick={() => alert('Coming soon!')} style={{ height: 48, marginTop: 24, width: '100%' }}>
                Apply
              </Button>
              <FormParagraph style={{ minHeight: 48 }}>
                All the benefits of the <strong>"Professional"</strong>, and:
              </FormParagraph>
              <div>
                <Item>30,000 additional credits deposited every month (45,000 in total).</Item>
                <Item>Send credits to other users.</Item>
                <Item>A reserved desk** at the collaborative space in Seattle, WA.</Item>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <FormHeading>Partner</FormHeading>
              <FormParagraph style={{ minHeight: 156 }}>
                Want to work with us in our collaboration space? Apply to get reserved space for your entire team and access to everything we have to offer.
              </FormParagraph>
              <H2 style={{ opacity: 0, marginTop: 24, visibility: 'hidden' }}>
                $X USD<span className={styles.subtle}>/mo</span>
              </H2>
              <Button style={{ height: 48, marginTop: 24, width: '100%' }}>Apply</Button>
              <FormParagraph style={{ minHeight: 48 }}>
                All the benefits of <strong>"Collaborator"</strong>, and:
              </FormParagraph>
              <div>
                <Item>Desks and collaborative team space***.</Item>
                <Item>Reservable event space (2,800 sqft) in Seattle, WA.</Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.subRow}>
          <div className={styles.subRowContent}>
            <P>
              <i>
                <strong>* Files</strong> — By uploading data through our service, you consent to our{' '}
                <a href="#" className={styles.link}>
                  Terms of Service
                </a>
                ,{' '}
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
                , and{' '}
                <a href="#" className={styles.link}>
                  Community Guidelines
                </a>
                . Our API enforces a strict file size limit of 100MB to prevent misuse of our services. However, we may consider increasing this limit once we have a clearer
                understanding of your use case. Reach out to us if you wish to discuss.
              </i>
            </P>
            <P>
              <i>
                <strong>** Reserved desks</strong> — Our office space offers a mix of reserved and open desks. The reserved desks are allocated on a first-come, first-served basis.
                Should we be unable to assign you a desk immediately, you will be placed on a waitlist and informed as soon as one becomes available. Please note that all desk
                assignments are subject to availability, regardless of application status.
              </i>
            </P>
            <P>
              <i>
                <strong>*** Collaborative team space </strong> — Availability for reserved team and startup space is limited. Please note that all spaces are subject to
                availability, even upon application.
              </i>
            </P>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <H3 style={{ marginTop: 48 }}>Contracting</H3>
          <P>
            Is your team shortstaffed? Do you need engineers and designers to fill roles on your team immediately?
            <br />
            <br />
            <strong>Our studio is available for full time work!</strong> The{' '}
            <a className={styles.link} href="https://internet.dev">
              Internet Development Studio Company
            </a>{' '}
            will help you develop, launch, and manage the work. Avoid recruiting an expensive in-house design or development team from scratch. Get projects completed case-by-case,
            or have us embed with you, your team, or your company.
          </P>
          <Button style={{ height: 48, marginTop: 24 }} href="https://internet.dev/pricing" target="_blank">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
}
