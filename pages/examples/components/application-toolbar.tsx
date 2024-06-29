import * as React from 'react';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import ToolbarControlsFixed from '@system/ToolbarControlsFixed';

function ExampleComponentsApplicationToolbar(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ application toolbar"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/application-toolbar"
    >
      <Navigation />
      <ToolbarControlsFixed />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleComponentsApplicationToolbar;
