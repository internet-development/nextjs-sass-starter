import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS, VISUALIZATION_OPTIONS_HEADINGS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, H4, P, Title, Text, SubText } from '@system/typography';

function ExampleSystemDataVisualization(props) {
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Data Visualization</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Data visualization is a powerful form of communication that transforms dense and complex information into engaging and understandable graphical representations. By
          portraying data in a visual format, users can easily compare information, identify patterns, and gain valuable insights to support decision-making processes.
        </P>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          This system (template) is designed to help visual designers create consistent, aesthetically pleasing, and effective data visualizations for dashboards and insights
          pages. By adhering to the guidelines outlined in this resource, designers can ensure that their charts and graphs align with industry best practices and proven design
          principles.
        </P>
        <H4 style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>Appendix</H4>
        <P style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>
          This system (template) is designed to help visual designers create consistent, aesthetically pleasing, and effective data visualizations for dashboards and insights
          pages. By adhering to the guidelines outlined in this resource, designers can ensure that their charts and graphs align with industry best practices and proven design
          principles.
        </P>
        <Table style={{ marginTop: 64 }} data={VISUALIZATION_OPTIONS} headings={VISUALIZATION_OPTIONS_HEADINGS} />
      </TwoColumnLayoutFull>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleSystemDataVisualization;
