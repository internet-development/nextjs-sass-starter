import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import HamburgerMenu from '@system/HamburgerMenu';
import Page from '@components/Page';

function ExampleHamburgerMenu(props) {
  const NAV_CONTENT = [
    { name: 'Home', link: '/examples/animations/hamburger-demo' },
    { name: 'About', link: '/examples/animations/hamburger-demo/about' },
  ];

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ hamburger menu"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/hamburger-demo"
    >
      <Navigation />
      <GridLayout style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <HamburgerMenu navContent={NAV_CONTENT} />
      </GridLayout>
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

export default ExampleHamburgerMenu;
