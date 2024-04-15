import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Content from '@system/layouts/Content';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import TextArea from '@system/TextArea';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';
import ThreeColumnAppLayout from '@system/layouts/ThreeColumnAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModal } from '@system/providers/ModalContextProvider';

async function onRefreshInvoices({ key, showModal }) {
  if (Utilities.isEmpty(key)) {
    return showModal({ name: 'ERROR', message: 'You must provide an API key' });
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'INVOICE' }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result;
}

async function onCreateInvoice({ key, showModal }) {
  if (Utilities.isEmpty(key)) {
    return showModal({ name: 'ERROR', message: 'You must provide an API key' });
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents/create', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'INVOICE' }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result;
}

async function onDeleteInvoice({ id, key }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents/delete', {
      method: 'DELETE',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return result;
}

async function onUpdateInvoice({ id, key, showModal, updates }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents/update', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, updates }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return result;
}

function ExampleInvoices(props) {
  const { showModal } = useModal();

  const [currentInvoice, setCurrentInvoice] = React.useState<Record<string, any> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [invoices, setInvoices] = React.useState<Array<any>>([]);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [updates, setUpdates] = React.useState<Record<string, any> | null>(null);

  const sidebar = (
    <div style={{ padding: `48px 24px 24px 24px` }}>
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
      <FormHeading style={{ marginTop: 64 }}>Invoices</FormHeading>
      <FormParagraph>This is an example application using production data to manage, edit, and view invoices.</FormParagraph>
      <FormParagraph>Each invoice gets a unique page with a unique ID that is only discoverable if you share it.</FormParagraph>
      <Button
        onClick={async () => {
          const invoiceResult = await onCreateInvoice({ key, showModal });
          if (!invoiceResult) {
            return;
          }

          const results = await onRefreshInvoices({ key, showModal });
          if (!results) {
            return;
          }

          setInvoices(results.data);
        }}
        style={{ marginTop: 24, width: '100%' }}
      >
        Create
      </Button>

      <ActionItem
        icon={`⊹`}
        onClick={async () => {
          const results = await onRefreshInvoices({ key, showModal });
          if (!results) {
            return;
          }

          setInvoices(results.data);
        }}
        style={{ marginTop: 16 }}
      >
        Refresh / List invoices
      </ActionItem>
    </div>
  );

  const details = (
    <div style={{ padding: `48px 24px 24px 24px` }}>
      {invoices.map((each) => {
        return (
          <MonospacePreview
            isActive={currentInvoice && each.id === currentInvoice.id}
            key={each.id}
            onClick={() => {
              if (currentInvoice && currentInvoice.id === each.id) {
                return;
              }

              setCurrentInvoice(each);
              setUpdates({
                subject: each.data.subject || '',
                description: each.data.description || '',
                payment_date: each.data.payment_date || '',
                amount: each.data.amount || '',
                client: each.data.client || '',
                address: each.data.address || '',
                location: each.data.location || '',
                email: each.data.email || '',
                phone: each.data.phone || '',
                contact: each.data.contact || '',
              });
            }}
            onDelete={async () => {
              const confirm = window.confirm(`Are you sure you want to delete ${each.id}? This action is irreversible.`);
              if (!confirm) {
                return;
              }

              const response = await onDeleteInvoice({ id: each.id, key });

              const results = await onRefreshInvoices({ key, showModal });
              if (!results) {
                return;
              }

              if (currentInvoice && currentInvoice.id === each.id) {
                setCurrentInvoice(null);
              }

              setInvoices(results.data);
            }}
            style={{ marginBottom: 16 }}
            title={each.data.type}
          >
            {JSON.stringify({ id: each.id, subject: each.data.subject }, null, 2)}
          </MonospacePreview>
        );
      })}
    </div>
  );

  return (
    <Page
      title="nextjs-sass-starter: Invoices"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/invoices"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThreeColumnAppLayout sidebar={sidebar} details={details}>
        {updates && currentInvoice ? (
          <div style={{ padding: `48px 24px 24px 24px` }}>
            <div>
              <ActionItem icon={`⭢`} href={`/examples/invoices/${currentInvoice.id}`} target="_blank">
                View shareable invoice
              </ActionItem>
            </div>
            <InputLabel style={{ marginTop: 32 }}>Subject</InputLabel>
            <Input
              autoComplete="off"
              name="subject"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="INTDEV Project"
              style={{ marginTop: 8 }}
              value={updates.subject}
            />
            <InputLabel style={{ marginTop: 24 }}>Description</InputLabel>
            <TextArea
              autoComplete="off"
              name="description"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.description}
            />
            <InputLabel style={{ marginTop: 24 }}>Supplier contact</InputLabel>
            <TextArea
              autoComplete="off"
              name="contact"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.contact}
            />
            <InputLabel style={{ marginTop: 24 }}>Payment date</InputLabel>
            <Input
              autoComplete="off"
              name="payment_date"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="February 20th, 2030"
              style={{ marginTop: 8 }}
              value={updates.payment_date}
            />
            <InputLabel style={{ marginTop: 24 }}>Amount</InputLabel>
            <Input
              autoComplete="off"
              name="amount"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="$100,000 USD"
              style={{ marginTop: 8 }}
              value={updates.amount}
            />
            <InputLabel style={{ marginTop: 24 }}>Client</InputLabel>
            <Input
              autoComplete="off"
              name="client"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Example Company"
              style={{ marginTop: 8 }}
              value={updates.client}
            />
            <InputLabel style={{ marginTop: 24 }}>Client address</InputLabel>
            <Input
              name="address"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="1912 Pike Place"
              style={{ marginTop: 8 }}
              value={updates.address}
            />
            <InputLabel style={{ marginTop: 24 }}>Client city, state, zip</InputLabel>
            <Input
              name="location"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Seattle, WA, 98101"
              style={{ marginTop: 8 }}
              value={updates.location}
            />
            <InputLabel style={{ marginTop: 24 }}>Client e-mail</InputLabel>
            <Input
              name="email"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="company@example.com"
              style={{ marginTop: 8 }}
              value={updates.email}
            />
            <InputLabel style={{ marginTop: 24 }}>Client phone number</InputLabel>
            <Input
              name="phone"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="(555) 555-5555"
              style={{ marginTop: 8 }}
              value={updates.phone}
            />
            <Button
              onClick={async () => {
                setLoading(true);
                const invoiceResult = await onUpdateInvoice({ id: currentInvoice.id, key, showModal, updates });
                if (!invoiceResult) {
                  setLoading(false);
                  return;
                }

                const results = await onRefreshInvoices({ key, showModal });
                setLoading(false);
                if (!results) {
                  return;
                }

                setInvoices(results.data);
              }}
              style={{ marginTop: 24, width: '100%' }}
            >
              Save
            </Button>
            <ActionItem icon={`⭢`} href={`/examples/invoices/${currentInvoice.id}`} target="_blank" style={{ marginTop: 16 }}>
              View shareable invoice
            </ActionItem>
          </div>
        ) : null}
      </ThreeColumnAppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleInvoices;
