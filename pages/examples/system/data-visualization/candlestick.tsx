import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import CandlestickChart from '@system/graphs/CandlestickChart';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const EXAMPLE_DUMMY_DATA = [
  { date: 'January', open: 30, high: 110, low: 20, close: 105 },
  { date: 'February', open: 55, high: 120, low: 30, close: 115 },
  { date: 'March', open: 55, high: 125, low: 45, close: 120 },
  { date: 'April', open: 80, high: 130, low: 70, close: 125 },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`];

function ExampleSystemDataVisualizationCandlestick(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 58.5px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ candlestick"
      description="Explore our design system with a candlestick chart example. This template is available on GitHub."
      url="https://wireframes.internet.dev/examples/system/data-visualization/candlestick"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="candlestick" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Candlestick</H2>
          <P style={paragraphStyle}>
            Candlestick charts are primarily used in financial analysis to visualize price movements of securities over time. Each "candle" represents four key pieces of
            information for a specific time period: the opening price, the closing price, the highest price, and the lowest price. This makes candlestick charts highly effective
            for traders looking to assess market sentiment and potential price direction. They excel in spotting market trends and price patterns, such as reversals or
            continuations, making them indispensable tools for technical analysis in trading.
          </P>
        </div>
        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 candlestick chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <CandlestickChart data={EXAMPLE_DUMMY_DATA} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA} />
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

export default ExampleSystemDataVisualizationCandlestick;
