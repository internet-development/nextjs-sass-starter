import * as React from 'react';

import DemoSearchComponentPerplexityAgent from '@demos/DemoSearchComponentPerplexityAgent';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

// DemoSearchComponentPerplexityAgent

function ExampleSearchVersionPerplexityAgent(props) {
  return (
    <Page
      isNotOpenSourceExample
      title="Components ➝ search concept with perplexity"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/search-perplexity-agent"
    >
      <DemoSearchComponentPerplexityAgent />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleSearchVersionPerplexityAgent;
