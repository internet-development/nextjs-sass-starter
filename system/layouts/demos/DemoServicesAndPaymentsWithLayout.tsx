import styles from '@system/layouts/demos/DemoServicesAndPaymentsWithLayout.module.scss';

import * as React from 'react';

import Button from '@system/Button';
import Content from '@system/layouts/Content';
import CheckmarkItem from '@system/documents/CheckmarkItem';

import { H2, H3, H4, SubLead, Title, Text } from '@system/typography';

export default function DemoBentoLayout(props) {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.top}>
          <H2>Get access to our offering</H2>
          <SubLead style={{ marginTop: `1rem`, maxWidth: '768px' }}>
            The{' '}
            <a className={styles.link} href="https://internet.dev">
              Internet Development Studio Company
            </a>{' '}
            invites you to use all of our services. Those services include API endpoints, developer tooling, reliable file storage, document generation tools, and even physical
            collaboration space.
          </SubLead>
        </section>
      </header>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.content}>
              <Title>Free</Title>
              <Text style={{ marginTop: 16, minHeight: 156 }}>
                The quickest and easiest way to use our API service, products and games. All you need is a verified e-mail address.
              </Text>
              <H3 style={{ marginTop: 24 }}>
                $0 USD<span className={styles.subtle}>/mo</span>
              </H3>
              {props.viewer ? (
                <Button visual style={{ height: 48, marginTop: 24, width: '100%' }}>
                  Already obtained
                </Button>
              ) : (
                <Button style={{ height: 48, marginTop: 24, width: '100%' }} href="/examples/authentication">
                  Sign up
                </Button>
              )}
              <Text style={{ opacity: 0, visibility: 'hidden', marginTop: 16, minheight: 52 }}>An invisible placeholder. Words that will occupy space.</Text>
              <div>
                <CheckmarkItem>Generate up to 5 documents using our templates.</CheckmarkItem>
                <CheckmarkItem>Create up to 3 surveys.</CheckmarkItem>
                <CheckmarkItem>Access to all free APIs, products, and games.</CheckmarkItem>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <Title>Professional</Title>
              <Text style={{ marginTop: 16, minHeight: 156 }}>
                More power and utility for anyone who needs it. Access to all of our products including a personal blog and newsletter tool.
              </Text>
              <H3 style={{ marginTop: 24 }}>
                $8.99 USD<span className={styles.subtle}>/mo</span>
              </H3>
              {props.viewer ? (
                props.viewer.level >= 20 ? (
                  <Button visual style={{ height: 48, marginTop: 24, width: '100%' }}>
                    Already obtained
                  </Button>
                ) : (
                  <Button
                    href={`https://buy.stripe.com/28og0B2f9eIj8Io9AA?prefilled_email=${props.viewer.email}`}
                    style={{ height: 48, marginTop: 24, width: '100%' }}
                    target="_blank"
                  >
                    Get started
                  </Button>
                )
              ) : (
                <Button style={{ height: 48, marginTop: 24, width: '100%' }} href="/examples/authentication">
                  Sign up
                </Button>
              )}
              <Text style={{ marginTop: 16, minHeight: 52 }}>
                All the benefits of the <strong>"Free"</strong>, and:
              </Text>
              <div>
                <CheckmarkItem>15,000 credits deposited every month.</CheckmarkItem>
                <CheckmarkItem>Free personal blog on TXT.DEV.</CheckmarkItem>
                <CheckmarkItem>Access to all new products and games.</CheckmarkItem>
                <CheckmarkItem>No limits.</CheckmarkItem>
                <CheckmarkItem>Create any additional document for 100 credits each.</CheckmarkItem>
                <CheckmarkItem>Create any additional survey for 100 credits each.</CheckmarkItem>
                <CheckmarkItem>Upload any file٭ for 1000 credits each.</CheckmarkItem>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <Title>Collaborator</Title>
              <Text style={{ marginTop: 16, minHeight: 156 }}>
                Requires an invitation from our community. Get a reserved desk٭٭ and access to new products as they are released.
              </Text>
              <H3 style={{ marginTop: 24 }}>
                $399 USD<span className={styles.subtle}>/mo</span>
              </H3>
              <Button onClick={() => alert('Coming soon!')} style={{ height: 48, marginTop: 24, width: '100%' }}>
                Apply
              </Button>
              <Text style={{ marginTop: 16, minHeight: 52 }}>
                All the benefits of the <strong>"Professional"</strong>, and:
              </Text>
              <div>
                <CheckmarkItem>30,000 additional credits deposited every month (45,000 in total).</CheckmarkItem>
                <CheckmarkItem>Send credits to other users.</CheckmarkItem>
                <CheckmarkItem>A reserved desk٭٭ at the collaborative space in Seattle, WA.</CheckmarkItem>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <Title>Partner</Title>
              <Text style={{ marginTop: 16, minHeight: 156 }}>
                Want to work with us in our collaboration space? Apply to get reserved space for your entire team and access to everything we have to offer.
              </Text>
              <H3 style={{ opacity: 0, marginTop: 24, visibility: 'hidden' }}>
                $X USD<span className={styles.subtle}>/mo</span>
              </H3>
              <Button onClick={() => alert('Coming soon!')} style={{ height: 48, marginTop: 24, width: '100%' }}>
                Apply
              </Button>
              <Text style={{ marginTop: 16, minHeight: 52 }}>
                All the benefits of <strong>"Collaborator"</strong>, and:
              </Text>
              <div>
                <CheckmarkItem>Desks and collaborative team space٭٭٭.</CheckmarkItem>
                <CheckmarkItem>Reservable event space (2,800 sqft) in Seattle, WA.</CheckmarkItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.subRow}>
          <div className={styles.subRowContent}>
            <Text style={{ marginTop: 16 }}>
              <i>
                <strong>٭ Files</strong> — By uploading data through our service, you consent to our{' '}
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
            </Text>
            <Text style={{ marginTop: 16 }}>
              <i>
                <strong>٭٭ Reserved desks</strong> — Our office space offers a mix of reserved and open desks. The reserved desks are allocated on a first-come, first-served basis.
                Should we be unable to assign you a desk immediately, you will be placed on a waitlist and informed as soon as one becomes available. Please note that all desk
                assignments are subject to availability, regardless of application status.
              </i>
            </Text>
            <Text style={{ marginTop: 16 }}>
              <i>
                <strong>٭٭٭ Collaborative team space </strong> — Availability for reserved team and startup space is limited. Please note that all spaces are subject to
                availability, even upon application.
              </i>
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Title style={{ marginTop: `2rem` }}>Contracting</Title>
          <Text style={{ marginTop: 16 }}>
            Is your team shortstaffed? Do you need engineers and designers to fill roles on your team immediately?
            <br />
            <br />
            <strong>Our studio is available for full time work!</strong> The{' '}
            <a className={styles.link} href="https://internet.dev">
              Internet Development Studio Company
            </a>{' '}
            will help you develop, launch, and manage the work. Avoid recruiting an expensive in-house design or development team from scratch. Get projects completed case-by-case,
            or have us embed with you, your team, or your company.
          </Text>
          <Button style={{ height: 48, marginTop: 24 }} href="https://internet.dev/pricing" target="_blank">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
}
