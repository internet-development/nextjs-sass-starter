import * as React from 'react';

import DemoApplicationSite from '@demos/DemoApplicationSite';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleComponentsApplicationSite(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ application site"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/application-site"
    >
      <Navigation />
      <DemoApplicationSite />
      <Footer />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleComponentsApplicationSite;
