import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import IntDev from '@system/svg/IntDev';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { H1, H2, H3, P } from '@system/typography';

function ExampleInvoice(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  return (
    <Page title={`nextjs-sass-starter: invoice ${props.id}`} description={`${props.data.payment_date}`} url={`https://wireframes.internet.dev/examples/invoices/${props.id}`}>
      <KeyHeader isHidden />
      <ThinAppLayout>
        <IntDev height="32px" style={{ marginTop: 88 }} />
        <P>
          <strong>Internet Development Studio Company</strong>
          <br />
          <strong>Invoice ID</strong>: {props.id}
          <br />
          <strong>Invoice Date</strong>: {Utilities.toDateISOString(props.updated_at)}
        </P>

        <P style={{ whiteSpace: 'pre-wrap' }}>
          <strong>{props.data.subject}</strong>
          <br />
          {props.data.description}
        </P>

        <P>
          <strong>Payment Due Date</strong>: {props.data.payment_date}
          <br />
          Subtotal: {props.data.amount}
          <br />
          Total Tax: $0.00 USD
          <br />
          Total Amount without Tax: {props.data.amount}
          <br />
          <strong>Amount Due</strong>: {props.data.amount}
        </P>
        <P>
          <strong>Customer</strong>
          <br />
          {props.data.client}
          <br />
          {props.data.address}
          <br />
          {props.data.location}
          <br />
          {props.data.email}
          <br />
          {props.data.phone}
        </P>
        <P style={{ opacity: 0.4 }}>
          The payment instructions, including bank details and other relevant information, will be provided separately. Please review the invoice at your earliest convenience.
        </P>
        <P style={{ opacity: 0.4 }}>If you have any questions or require further clarification regarding the payment, feel free to contact us. Thank you!</P>
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`https://api.internet.dev/api/documents/${context.params.id}`);
  const results = await response.json();

  if (!results) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (results.error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { ...results.data },
  };
}

export default ExampleInvoice;
