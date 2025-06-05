import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoDocumentationConceptOne from '@demos/DemoDocumentationConceptOne';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Page from '@components/Page';

function ExampleDocumentationOne(props) {
  return (
    <Page
      isNotOpenSourceExample
      title="wireframes.internet.dev ➝ components ➝ documentation I"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/documentation-1"
    >
      <DemoDocumentationConceptOne />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleDocumentationOne;
