import * as React from 'react';
import * as Utilities from '@common/utilities';

import AppLayout from '@system/layouts/AppLayout';
import Cookies from 'js-cookie';
import LineChart from '@system/graphs/LineChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import Table from '@system/Table';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';
import { FormHeading, FormParagraph } from '@system/typography/forms';

function ExampleStock(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);

  const parsedData =
    props.data && props.data.length
      ? props.data.map((item) => ({
          ...item,
          date: new Date(item.priceDate),
          close: +item.close,
        }))
      : null;

  return (
    <Page
      title={`api.internet.dev: Symbol: ${props.symbol}`}
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url={`https://wireframes.internet.dev/examples/stocks/${props.symbol}`}
    >
      <KeyHeader
        isModalVisible={!!currentModal}
        onInputChange={setKey}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION_TEMPLATE', parentId: 'site-navigation-button' })}
        value={key}
      />
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
        {parsedData ? <FormHeading style={{ marginTop: 24 }}>{props.symbol}</FormHeading> : <FormHeading style={{ marginTop: 48 }}>Access denied</FormHeading>}
        {parsedData ? <LineChart data={parsedData} style={{ marginTop: 8 }} /> : <FormParagraph>You must be signed in to view stock quotes</FormParagraph>}
      </ThinAppLayout>
      <GlobalModalManager
        currentModal={currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onSetModal={setModal}
        onSignOut={() => {
          const confirm = window.confirm('Are you sure you want to sign out?');
          if (!confirm) {
            return;
          }

          setKey('');
          Cookies.remove('sitekey');
          window.location.reload();
        }}
        viewer={props.viewer}
      />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let viewer = null;
  let data = null;
  let sessionKey = context.req.cookies['sitekey'] || '';
  if (Utilities.isEmpty(sessionKey)) {
    return {
      props: { sessionKey: '', viewer: null, symbol: context.params.ticker },
    };
  }

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {}

  try {
    const response = await fetch(`https://api.internet.dev/api/markets/stocks/${context.params.ticker}`, {
      method: 'POST',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.data) {
      data = result.data;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer, data, symbol: context.params.ticker },
  };
}

export default ExampleStock;
