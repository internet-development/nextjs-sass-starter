import * as React from 'react';

import DemoLockScreen from '@demos/DemoLockScreen';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleLockScreen(props) {
  return (
    <Page
      isNotOpenSourceExample
      title="Components ➝ lock screen"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/lockscreen"
    >
      <DemoLockScreen />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleLockScreen;
