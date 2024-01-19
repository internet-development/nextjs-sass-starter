import * as React from 'react';
import * as Utilities from '@common/utilities';

import Page from '@components/Page';

import GuillotineText from '@components/clients/guillotine/svg/GuillotineText';
import GuillotineSymbol from '@components/clients/guillotine/svg/GuillotineSymbol';
import HomePage from '@components/clients/guillotine/HomePage';

function ClientGuillotine(props) {
  return (
    <Page title="Prototype: Guillotine" description="This is a prototype." url="https://wireframes.internet.dev/clients/guillotine">
      <HomePage />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientGuillotine;
