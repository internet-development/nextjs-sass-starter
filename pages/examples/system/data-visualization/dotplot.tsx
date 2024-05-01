import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import DotPlot from '@root/system/graphs/DotPlot';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const EXAMPLE_DUMMY_DATA = [
  { label: 'Item 1', value: 20 },
  { label: 'Item 2', value: 15 },
  { label: 'Item 3', value: 8 },
  { label: 'Item 4', value: 20 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 12 },
  { label: 'Item 7', value: 18 },
  { label: 'Item 8', value: 22 },
  { label: 'Item 9', value: 3 },
  { label: 'Item 10', value: 17 },
  { label: 'Item 11', value: 7 },
  { label: 'Item 12', value: 14 },
  { label: 'Item 13', value: 19 },
  { label: 'Item 14', value: 24 },
  { label: 'Item 15', value: 9 },
  { label: 'Item 16', value: 13 },
  { label: 'Item 17', value: 21 },
  { label: 'Item 18', value: 11 },
  { label: 'Item 19', value: 16 },
  { label: 'Item 20', value: 23 },
];

function ExampleSystemDataVisualizationDotPlot(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 400 };

  const chart = {
    title: 'Dot plot Example',
    description: 'This is an example of a Dot plot using D3.js integrated into a React component.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: donut"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/donut"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="dotplot" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Dot plot</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          A Dot plot is a versatile and straightforward way to visualize data, offering clear insights into the distribution and comparison of values across different groups or
          categories. Their simplicity and clarity can be particularly valuable in exploratory data analysis, educational settings, and any situation where individual data points
          and their distribution are of interest.{' '}
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--theme-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <DotPlot data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
        </div>
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

export default ExampleSystemDataVisualizationDotPlot;
