import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import AppLayout from '@system/layouts/AppLayout';
import Cookies from 'js-cookie';
import LineChart from '@root/system/graphs/LineChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import Table from '@system/Table';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { H1, Text, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormParagraph } from '@system/typography/forms';

function ExampleStock(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  const stock = props.stock[props.symbol.toUpperCase()] ? props.stock[props.symbol.toUpperCase()].quote : {};

  const parsedData =
    props.data && props.data.length
      ? props.data.map((item) => ({
          ...item,
          date: new Date(item.priceDate),
          close: +item.close,
          value: +item.close,
        }))
      : null;

  const isDataHydrated = stock && parsedData;

  const tableHeadings = ['Object key', 'Object value'];
  const tableData = Object.keys(stock).map((each) => {
    return {
      id: each,
      data: [each, String(stock[each])],
    };
  });

  return (
    <Page
      title={`api.internet.dev: Symbol: ${props.symbol}`}
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url={`https://wireframes.internet.dev/examples/stocks/${props.symbol}`}
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            const confirm = window.confirm('Are you sure you want to sign out?');
            if (!confirm) {
              return;
            }

            setKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        />
        {isDataHydrated ? (
          <>
            <Text style={{ marginTop: `1rem` }}>
              {stock.companyName} ({props.symbol})
            </Text>
            <H1 style={{ marginTop: `1rem` }}>
              {stock.iexRealtimePrice} <UnitLabel>USD</UnitLabel>
            </H1>
            <SubText style={{ marginTop: 8 }}>Last updated at {stock.latestTime}</SubText>
            <SubText style={{ marginTop: 4 }}>
              {props.symbol} is trading at {stock.peRatio} times earnings.
            </SubText>
          </>
        ) : (
          <FormHeading style={{ marginTop: 48 }}>Access denied</FormHeading>
        )}
        {isDataHydrated ? <LineChart data={parsedData} style={{ marginTop: 32 }} /> : <FormParagraph>You must be signed in to view stock quotes</FormParagraph>}
        {isDataHydrated ? <Table data={tableData} headings={tableHeadings} style={{ marginTop: 24 }} /> : null}
      </ThinAppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let data = null;
  let stock = null;

  const { sessionKey, viewer } = await Server.setup(context);

  try {
    const response = await fetch('https://api.internet.dev/api/markets/stocks', {
      method: 'POST',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ tickers: context.params.ticker }),
    });
    const result = await response.json();
    if (result && result.data) {
      stock = result.data;
    }
  } catch (e) {}

  try {
    const response = await fetch(`https://api.internet.dev/api/markets/stocks/${context.params.ticker}`, {
      method: 'POST',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ range: '12m' }),
    });
    const result = await response.json();
    if (result && result.data) {
      data = result.data;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer, data, stock, symbol: context.params.ticker },
  };
}

export default ExampleStock;
