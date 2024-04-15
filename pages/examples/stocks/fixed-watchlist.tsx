import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import AppLayout from '@system/layouts/AppLayout';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import Table from '@system/Table';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';
import { FormHeading, FormParagraph } from '@system/typography/forms';

function ExampleFixedStockWatchlist(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  const headings = [`Stock`, `Price`, `Outstanding Shares`, `P/E`, `Marketcap (USD)`];
  const data = props.data
    ? Object.keys(props.data).map((each) => {
        const stock = props.data[each].quote;
        return {
          id: each,
          data: [
            <a key={stock.symbol} href={`/examples/stocks/${stock.symbol}`} target="_blank">
              {stock.companyName} ({stock.symbol})
            </a>,
            `${Utilities.formatDollars(stock.iexRealtimePrice)}`,
            `${Number(stock.marketCap / stock.iexRealtimePrice)}`,
            `${stock.peRatio}`,
            `${Utilities.formatDollars(stock.marketCap)}`,
          ],
        };
      })
    : [];

  return (
    <Page
      title="api.internet.dev: Fixed Stock Watchlist"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/stocks/fixed-watchlist"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <AppLayout>
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
        <FormHeading style={{ marginTop: 48 }}>Example watchlist</FormHeading>
        <FormParagraph>
          Here is a sample list of stocks accessible through a hardcoded endpoint. If you are authenticated, you can use our API to view this stock watchlist and monitor the stock
          prices in real time. All prices are sourced from IEX Cloud and are updated live.
        </FormParagraph>
        {data && data.length ? <Table data={data} headings={headings} style={{ marginTop: 24 }} /> : null}
      </AppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let data = null;

  const { sessionKey, viewer } = await Server.setup(context);

  try {
    const response = await fetch('https://api.internet.dev/api/markets/stocks', {
      method: 'POST',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ tickers: 'msft,aapl,goog' }),
    });
    const result = await response.json();
    if (result && result.data) {
      data = result.data;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer, data },
  };
}

export default ExampleFixedStockWatchlist;
