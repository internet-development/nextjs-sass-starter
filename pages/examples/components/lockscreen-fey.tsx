import * as React from 'react';

import DemoLockScreenFeyAgent from '@demos/DemoLockScreenFeyAgent';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleLockScreenFeyAgent(props) {
  return (
    <Page
      isNotOpenSourceExample
      title="Components ➝ lock screen concept with fey"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/lockscreen-fey-agent"
    >
      <DemoLockScreenFeyAgent />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleLockScreenFeyAgent;
