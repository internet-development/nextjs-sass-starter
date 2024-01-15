import * as React from 'react';
import * as Utilities from '@common/utilities';

import Page from '@components/Page';

import Navigation from '@components/clients/plvs/Navigation';
import Footer from '@components/clients/plvs/Footer';
import BlogList from '@components/clients/plvs/BlogList';

function ClientPLVSBlog(props) {
  return (
    <Page title="Prototype: PLVS" description="This is a prototype." url="https://wireframes.internet.dev/clients/plvs/blog">
      <Navigation />
      <BlogList />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientPLVSBlog;
