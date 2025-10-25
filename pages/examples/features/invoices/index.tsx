import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Content from '@system/layouts/Content';
import Cookies from '@modules/cookies';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import ModalError from '@demos/modals/ModalError';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import TextArea from '@system/TextArea';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';
import ThreeColumnAppLayout from '@system/layouts/ThreeColumnAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModals } from '@root/system/modals/ModalContext';

const DOCUMENT_TYPE = 'INVOICE';

function ExampleInvoices(props) {
  const modals = useModals();

  const [currentInvoice, setCurrentInvoice] = React.useState<Record<string, any> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [invoices, setInvoices] = React.useState<Array<any>>([]);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [updates, setUpdates] = React.useState<Record<string, any> | null>(null);

  const onError = (message: string) => {
    modals.open(ModalError, { message: message });
  };

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
          if (Utilities.isEmpty(key)) {
            return onError('You must provide an API key');
          }

          const domain = Utilities.getDomainFromEmailWithoutAnySubdomain(props.viewer.email);
          const invoiceResult = await Queries.onUserCreateDocument({ key, type: DOCUMENT_TYPE, domain });
          if (!invoiceResult) {
            return;
          }

          const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE, domain });
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
          if (Utilities.isEmpty(key)) {
            return onError('You must provide an API key');
          }

          const domain = Utilities.getDomainFromEmailWithoutAnySubdomain(props.viewer.email);
          const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE, domain });
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
              if (Utilities.isEmpty(key)) {
                return onError('You must provide an API key');
              }

              const confirm = window.confirm(`Are you sure you want to delete ${each.id}? This action is irreversible.`);
              if (!confirm) {
                return;
              }

              const response = await Queries.onDeleteDocumentById({ id: each.id, key });
              const domain = Utilities.getDomainFromEmailWithoutAnySubdomain(props.viewer.email);
              const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE, domain });
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
      title="wireframes.internet.dev ➝ features ➝ invoices"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/invoices"
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={props.viewer} />
      <ThreeColumnAppLayout sidebar={sidebar} details={details}>
        {updates && currentInvoice ? (
          <div style={{ padding: `48px 24px 24px 24px` }}>
            <div>
              <ActionItem icon={`⭢`} href={`/examples/features/invoices/${currentInvoice.id}`} target="_blank">
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
                if (Utilities.isEmpty(key)) {
                  return onError('You must provide an API key');
                }

                setLoading(true);
                const invoiceResult = await Queries.onUpdateDocumentById({ id: currentInvoice.id, key, data: updates });
                if (!invoiceResult) {
                  setLoading(false);
                  return;
                }

                const domain = Utilities.getDomainFromEmailWithoutAnySubdomain(props.viewer.email);
                const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE, domain });
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
            <ActionItem icon={`⭢`} href={`/examples/features/invoices/${currentInvoice.id}`} target="_blank" style={{ marginTop: 16 }}>
              View shareable invoice
            </ActionItem>
          </div>
        ) : null}
      </ThreeColumnAppLayout>
      <GlobalModalManager />
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
