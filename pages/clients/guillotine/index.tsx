import * as React from 'react';
import * as Utilities from '@common/utilities';

import Page from '@components/Page';

function ClientGuillotine(props) {
  return (
    <Page title="Prototype: Guillotine" description="This is a prototype." url="https://wireframes.internet.dev/clients/guillotine">
      Hello World
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientGuillotine;
