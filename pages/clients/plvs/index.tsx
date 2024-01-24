import * as React from 'react';
import * as Utilities from '@common/utilities';

import Page from '@components/Page';

import Navigation from '@components/clients/plvs/Navigation';
import Hero from '@components/clients/plvs/Hero';
import HeroCopy from '@components/clients/plvs/HeroCopy';
import HeroMarketingGrid from '@components/clients/plvs/HeroMarketingGrid';
import Footer from '@components/clients/plvs/Footer';

import { H1, H2 } from '@components/clients/plvs/typography';

function ClientPLVS(props) {
  return (
    <Page title="Prototype: PLVS" description="This is a prototype." url="https://wireframes.internet.dev/clients/plvs">
      <Navigation hideLogo />
      <Hero />
      <HeroCopy />
      <HeroMarketingGrid />
      <H2></H2>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientPLVS;
