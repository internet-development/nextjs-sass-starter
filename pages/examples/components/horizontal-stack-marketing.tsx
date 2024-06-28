import * as React from 'react';

import Content from '@system/layouts/Content';
import Cross from '@system/svg/Cross';
import DemoElementSpacer from '@demos/DemoElementSpacer';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import IntDev from '@system/svg/IntDev';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionHorizontalStack from '@system/sections/SectionHorizontalStack';

import { H1, Lead } from '@system/typography';

function ExampleHorizontalStackMarketing(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ horizontal stack"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/horizontal-stack-marketing"
    >
      <Navigation />
      <SectionHorizontalStack
        top={
          <DemoElementSpacer left={<Cross height={64} />} right={<Cross height={64} />} middleStyle={{ display: 'flex', alignItems: 'flex-end' }}>
            <IntDev width="100%" />
          </DemoElementSpacer>
        }
        bottom={
          <DemoElementSpacer left={<Cross height={64} />} right={<Cross height={64} />}>
            <IntDev width="100%" />
          </DemoElementSpacer>
        }
      >
        <H1 style={{ textAlign: 'center' }}>Middle of Stack</H1>
        <Lead style={{ textAlign: 'center', marginTop: 24 }}>This is the middle of the stack in a calc(100dvh - 48px) container.</Lead>
      </SectionHorizontalStack>
      <Footer style={{ borderTop: `1px solid var(--theme-border)` }} />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleHorizontalStackMarketing;
