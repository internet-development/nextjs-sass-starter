import * as React from 'react';

import DashboardWithSidebarLayout from '@system/layouts/DashboardWithSidebarLayout';
import DemoBentoLayout from '@demos/DemoBentoLayout';
import DemoSidebarLayout from '@demos/DemoSidebarLayout';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

import { H1, Lead } from '@system/typography';

function ExampleDashboard(props) {
  const sidebarElement = <DemoSidebarLayout />;

  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ navigation, dashboard"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/dashboard"
    >
      <Navigation />
      <DashboardWithSidebarLayout sidebar={sidebarElement}>
        <DemoBentoLayout hideContent />
      </DashboardWithSidebarLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleDashboard;
