import * as React from 'react';

import DemoReportEdit from '@demos/DemoReportEdit';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleReportEdit(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ report edit"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/report-generator"
    >
      <DemoReportEdit />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleReportEdit;
