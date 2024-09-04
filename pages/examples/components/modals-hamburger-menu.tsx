import * as React from 'react';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

import MenuButton from '@system/MenuButton';
import { useModal } from '@system/providers/ModalContextProvider';

function ExampleModalsWebsitePrompt(props) {
  const NAV_CONTENT = [
    { name: 'Home', link: '/examples/components/modals-hamburger-menu' },
    { name: 'About', link: '/examples/components/modals-hamburger-menu' },
  ];

  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ modals hamburger menu"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/modals-hamburger-menu"
    >
      <Navigation />
      <GlobalModalManager navItems={NAV_CONTENT} />
      <MenuButton />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleModalsWebsitePrompt;
