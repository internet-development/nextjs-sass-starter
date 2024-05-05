import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';

function ExampleEmptyGridTemplate(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="wireframes.internet.dev ➝ empty ➝ grid template page"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/empty/grid-template-page"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <GridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <article
          style={{
            background: `var(--theme-background)`,
            borderRadius: `3px`,
            boxShadow: `var(--theme-box-shadow-modal)`,
            fontSize: `3rem`,
            fontWeight: 600,
            maxWidth: 320,
            padding: `8px 16px 8px 16px`,
            textAlign: 'center',
          }}
        >
          Hello World
        </article>
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

export default ExampleEmptyGridTemplate;
