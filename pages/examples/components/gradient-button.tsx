import * as React from 'react';

import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import GradientButton from '@root/demos/GradientButton';

export default function ExampleGradientButton() {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ gradient button"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/gradient-button"
    >
      <Navigation />
      <GridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <GradientButton>Click me!</GradientButton>
      </GridLayout>
    </Page>
  );
}
