import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import CheckmarkItem from '@system/documents/CheckmarkItem';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

function ExampleJobPosting(props) {
  return (
    <Page
      title="api.internet.dev: Job posting"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/job-posting"
    >
      <Navigation />
      <ThinAppLayout>
        <Title>Full-time, North America</Title>
        <H1>Webmaster IV</H1>
        <P style={{ fontStyle: 'italic', opacity: 0.5 }}>Create a Read CV and post it in one our channels to apply for this role.</P>
        <P style={{ marginTop: `4rem` }}>
          Internet Development Studio ("INTDEV") is an engineering and design team based in Seattle, Washington. We specialize in web design, branding, marketing, and coding. We
          are looking for a skilled Webmaster to join our team in Seattle and help us create outstanding web experiences.
        </P>

        <P style={{ marginTop: `1rem`, opacity: 0.5 }}>
          At Internet Development Studio, we are committed to bringing back the true meaning of the Webmaster role. A Webmaster was a role given to someone who is able to design,
          implement, and maintain websites. As a team, we'll learn together, make mistakes, tackle challenges head-on, and nurture our shared passion for code, design, and
          branding. We're a group of people who love designing & building for the web, and that is what brings us together.
        </P>

        <P style={{ marginTop: `1rem`, opacity: 0.5 }}>
          Our team is driven by a constant desire to learn and work towards our professional goals. We believe in collaboration, sharing knowledge, and supporting each other's
          growth. We know that some of the most rewarding experiences come from building software together and improving our skills with each project.
        </P>

        <SubTitle style={{ marginTop: `2rem`, borderBottom: `1px solid var(--color-border)`, paddingBottom: 16, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
          The Job
        </SubTitle>
        <CheckmarkItem isMinimal>You will use Figma.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will write code with NextJS 14, SASS, TypeScript, and Postgres.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will write high performance APIs in the language of your choice.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will design, build, deploy, and maintain entire websites alongside the team.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will attend client meetings and help service customers.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will help the team launch our own bespoke products and games.</CheckmarkItem>
        <CheckmarkItem isMinimal>You will share your work online as frequently as possible.</CheckmarkItem>
        <SubTitle style={{ marginTop: `2rem`, borderBottom: `1px solid var(--color-border)`, paddingBottom: 16, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
          What we offer
        </SubTitle>

        <CheckmarkItem isMinimal>The opportunity to build high profile websites alongside a passionate team.</CheckmarkItem>
        <CheckmarkItem isMinimal>A learning environment while we work on meaningful high impact projects.</CheckmarkItem>
        <CheckmarkItem isMinimal>Competitive salary and equity.</CheckmarkItem>
        <CheckmarkItem isMinimal>Paid meals during workdays.</CheckmarkItem>
        <CheckmarkItem isMinimal>Paid co-working space/desk at an office.</CheckmarkItem>
        <CheckmarkItem isMinimal>Health, dental and vision insurance (USA).</CheckmarkItem>
        <CheckmarkItem isMinimal>A flexible vacation and time off policy.</CheckmarkItem>
        <CheckmarkItem isMinimal>We will pay for your office supplies and hardware.</CheckmarkItem>

        <SubTitle style={{ marginTop: `2rem`, borderBottom: `1px solid var(--color-border)`, paddingBottom: 16, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
          Requirements
        </SubTitle>
        <CheckmarkItem isMinimal>You must be willing to relocate or travel to Seattle, WA for work.</CheckmarkItem>
        <CheckmarkItem isMinimal>You must be a US Citizen.</CheckmarkItem>
        <CheckmarkItem isMinimal>You must be passionate about building websites.</CheckmarkItem>
        <CheckmarkItem isMinimal>You must have at least one website you are proud of sharing.</CheckmarkItem>
      </ThinAppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleJobPosting;
