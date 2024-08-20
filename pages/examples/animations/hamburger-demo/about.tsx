import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import HamburgerMenu from '@system/HamburgerMenu';
import Page from '@components/Page';

import { determineTheme, THEME_TYPES, useTheme } from '@system/animations/ThemeManager';
import { THEME_PATH_MAP } from '@pages/examples/animations/hamburger-demo/index';

function ExampleAboutPageWithMenu({initialTheme, newTheme}) {
  useTheme(initialTheme, newTheme);
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
        {/* TODO (@xBalbinus): Add content here to differentiate from main page */}
      </GridLayout>
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  let storedTheme;
  storedTheme = determineTheme(context, THEME_PATH_MAP, THEME_TYPES.THEME_DARK);

  return {
    props: { sessionKey, viewer, initialTheme: storedTheme, newTheme: THEME_TYPES.THEME_DARK },
  };
}

export default ExampleAboutPageWithMenu;
