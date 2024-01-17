import * as React from 'react';
import * as Utilities from '@common/utilities';

import Page from '@components/Page';

import Navigation from '@components/clients/plvs/Navigation';
import Footer from '@components/clients/plvs/Footer';
import PeopleGrid from '@components/clients/plvs/PeopleGrid';
import CopyDisclosures from '@components/clients/plvs/CopyDisclosures';

function ClientPLVSDisclosures(props) {
  return (
    <Page title="Prototype: PLVS" description="This is a prototype." url="https://wireframes.internet.dev/clients/plvs/disclosures">
      <Navigation />
      <CopyDisclosures />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientPLVSDisclosures;
