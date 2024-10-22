import * as React from 'react';

import DemoSearchComponentLockScreen from '@demos/DemoSearchComponentLockScreen';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleSearchVersionLockScreen(props) {
  return (
    <Page
      isNotOpenSourceExample
      title="Components ➝ search lockscreen"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/search-lockscreen"
    >
      <DemoSearchComponentLockScreen />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleSearchVersionLockScreen;
