import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import IntDev from '@system/svg/IntDev';
import InvoiceLayout from '@system/layouts/InvoiceLayout';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';

import { Title, Text } from '@system/typography';

function ExampleInvoice(props) {
  return (
    <Page title={`nextjs-sass-starter: invoice ${props.id}`} description={`${props.data.payment_date}`} url={`https://wireframes.internet.dev/examples/invoices/${props.id}`}>
      <InvoiceLayout>
        <IntDev height="32px" style={{ marginTop: 88 }} />
        <Title style={{ marginTop: 16 }}>Internet Development Studio Company Invoice</Title>
        <Text style={{ marginTop: 16 }}>
          <strong>Invoice ID</strong> ➝ {props.id}
          <br />
          <strong>Invoice Date</strong> ➝ {Utilities.toDateISOString(props.updated_at)}
        </Text>

        <Title style={{ marginTop: 48 }}>{props.data.subject}</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>{props.data.description}</Text>

        <Title style={{ marginTop: 48 }}>Payment Due By ➝ {props.data.payment_date} (NET 30)</Title>
        <Text style={{ marginTop: 16 }}>
          Subtotal ➝ {props.data.amount}
          <br />
          Total Tax ➝ $0.00 USD
          <br />
          Total Amount without Tax ➝ {props.data.amount}
          <br />
          <strong>Amount Due</strong> ➝ {props.data.amount}
        </Text>

        <Title style={{ marginTop: 48 }}>Customer</Title>
        <Text style={{ marginTop: 16 }}>
          {props.data.client}
          <br />
          {props.data.address}
          <br />
          {props.data.location}
          <br />
          {props.data.email}
          <br />
          {props.data.phone}
        </Text>

        <Title style={{ marginTop: 48 }}>INTDEV Contact</Title>
        <Text style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>{props.data.contact}</Text>
        <Text style={{ marginTop: 64, opacity: 0.4 }}>
          We will provide the payment details, including bank information and any additional necessary information, in a separate communication. Please review the invoice at your
          earliest convenience.
        </Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>If you have any questions or require further details regarding the payment, please feel free to contact us.</Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>
          Please be advised that this invoice contains confidential information intended only for the authorized recipient. If you are not the intended recipient, you should not
          disseminate, distribute, or copy this document. We kindly request that you notify the sender immediately by e-mail if you have received this invoice by mistake and delete
          this e-mail from your system. Your cooperation in maintaining the confidentiality of this communication is greatly appreciated.
        </Text>
        <Text style={{ marginTop: 16, opacity: 0.4 }}>Thank you!</Text>
      </InvoiceLayout>
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
