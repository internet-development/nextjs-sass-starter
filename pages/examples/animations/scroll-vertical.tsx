import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import ScrollVertical from '@system/scroll/ScrollVertical';
import Page from '@components/Page';

function ExampleScrollCarouselHorizontal(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ scroll vertical"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/scroll-vertical"
    >
      <Navigation />
      <ScrollVertical colorEnd="var(--theme-text)" colorStart="var(--theme-background)" height="200vh" />
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

export default ExampleScrollCarouselHorizontal;
