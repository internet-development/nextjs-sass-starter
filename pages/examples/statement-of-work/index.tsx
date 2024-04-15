import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Checkbox from '@system/Checkbox';
import Cookies from 'js-cookie';
import Content from '@system/layouts/Content';
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

async function onRefreshSOW({ key, showModal }) {
  if (Utilities.isEmpty(key)) {
    return showModal({ name: 'ERROR', message: 'You must provide an API key' });
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'STATEMENT_OF_WORK' }),
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

async function onCreateSOW({ key, showModal }) {
  if (Utilities.isEmpty(key)) {
    return showModal({ name: 'ERROR', message: 'You must provide an API key' });
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/documents/create', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'STATEMENT_OF_WORK' }),
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

async function onDeleteSOW({ id, key }) {
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

async function onUpdateSOW({ id, key, showModal, updates }) {
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

function ExampleStatementOfWorks(props) {
  const { showModal } = useModal();

  const [currentSOW, setCurrentSOW] = React.useState<Record<string, any> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [SOWs, setSOWs] = React.useState<Array<any>>([]);
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
      <FormHeading style={{ marginTop: 64 }}>Statement of Works</FormHeading>
      <FormParagraph>
        This is an example application using production data to manage, edit, and view Statement of Works for Clients that the Interent Development Studio Company ("INTDEV") work
        for.
      </FormParagraph>
      <FormParagraph>Each SOW gets a unique page with a unique ID that is only discoverable if you share it.</FormParagraph>
      <Button
        onClick={async () => {
          const result = await onCreateSOW({ key, showModal });
          if (!result) {
            return;
          }

          const results = await onRefreshSOW({ key, showModal });
          if (!results) {
            return;
          }

          setSOWs(results.data);
        }}
        style={{ marginTop: 24, width: '100%' }}
      >
        Create
      </Button>
      <ActionItem
        icon={`⊹`}
        onClick={async () => {
          const results = await onRefreshSOW({ key, showModal });
          if (!results) {
            return;
          }

          setSOWs(results.data);
        }}
        style={{ marginTop: 16 }}
      >
        Refresh / List SOWs
      </ActionItem>
    </div>
  );

  const details = (
    <div style={{ padding: `48px 24px 24px 24px` }}>
      {SOWs.map((each) => {
        return (
          <MonospacePreview
            isActive={currentSOW && each.id === currentSOW.id}
            key={each.id}
            onClick={() => {
              if (currentSOW && currentSOW.id === each.id) {
                return;
              }

              setCurrentSOW(each);

              setUpdates({
                milestones: each.data.milestones || '',
                summary: each.data.summary || '',
                location: each.data.location || '',
                team: each.data.team || '',
                supplier_incorporation: each.data.supplier_incorporation || '',
                supplier_incorporation_address: each.data.supplier_incorporation_address || '',
                supplier_physical_address: each.data.supplier_physical_address || '',
                supplier_amount_billed: each.data.supplier_amount_billed || '',
                supplier_signer: each.data.supplier_signer || '',
                supplier_title: each.data.supplier_title || '',
                supplier_name: each.data.supplier_name || '',
                supplier_shorthand_name: each.data.supplier_shorthand_name || '',
                supplier_email: each.data.supplier_email || '',
                client_name: each.data.client_name || '',
                client_billing_address: each.data.client_billing_address || '',
                client_incorporation: each.data.client_incorporation || '',
                client_signer: each.data.client_signer || '',
                client_title: each.data.client_title || '',
                client_email: each.data.client_email || '',
                client_email_legal: each.data.client_email_legal || '',
                client_email_invoices: each.data.client_email_invoices || '',
                client_contact_name: each.data.client_contact_name || '',
                client_effective_date: each.data.client_effective_date || '',
                client_end_date: each.data.client_end_date || '',
                service_design: each.data.service_design,
                service_collaboration: each.data.service_collaboration,
                service_brand: each.data.service_brand,
                service_development: each.data.service_development,
                service_audits: each.data.service_audits,
                service_maintenance: each.data.service_maintenance,
                service_launch: each.data.service_launch,
                service_embedding: each.data.service_embedding,
              });
            }}
            onDelete={async () => {
              const confirm = window.confirm(`Are you sure you want to delete ${each.id}? This action is irreversible.`);
              if (!confirm) {
                return;
              }

              const response = await onDeleteSOW({ id: each.id, key });

              const results = await onRefreshSOW({ key, showModal });
              if (!results) {
                return;
              }

              if (currentSOW && currentSOW.id === each.id) {
                setCurrentSOW(null);
              }

              setSOWs(results.data);
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
      title="nextjs-sass-starter: Statement of Work"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/statement-of-work"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThreeColumnAppLayout sidebar={sidebar} details={details}>
        {updates && currentSOW ? (
          <div style={{ padding: `48px 24px 24px 24px` }}>
            <div>
              <ActionItem icon={`⭢`} href={`/examples/statement-of-work/${currentSOW.id}`} target="_blank">
                View shareable statement of work
              </ActionItem>
            </div>
            <InputLabel style={{ marginTop: 32 }}>2. Your company name</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Internet Development Studio Company"
              style={{ marginTop: 8 }}
              value={updates.supplier_name}
            />

            <InputLabel style={{ marginTop: 16 }}>2. Your company abbreviation</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_shorthand_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="INTDEV"
              style={{ marginTop: 8 }}
              value={updates.supplier_shorthand_name}
            />

            <InputLabel style={{ marginTop: 16 }}>2. Your job title</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_title"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="General Manager"
              style={{ marginTop: 8 }}
              value={updates.supplier_title}
            />

            <InputLabel style={{ marginTop: 16 }}>2. Who has the authority to sign?</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_signer"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Frank Ocean"
              style={{ marginTop: 8 }}
              value={updates.supplier_signer}
            />

            <InputLabel style={{ marginTop: 16 }}>2. What is their e-mail?</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_email"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="frank.ocean@microsoft.com"
              style={{ marginTop: 8 }}
              value={updates.supplier_email}
            />

            <InputLabel style={{ marginTop: 16 }}>2. Who on the team is working on this?</InputLabel>
            <TextArea
              autoComplete="off"
              name="team"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.team}
            />

            <InputLabel style={{ marginTop: 64 }}>4.1. Background and Project Summary</InputLabel>
            <TextArea
              autoComplete="off"
              name="summary"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.summary}
            />
            <InputLabel style={{ marginTop: 16 }}>4.2. Provisoning and Services Location</InputLabel>
            <TextArea
              autoComplete="off"
              name="location"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.location}
            />
            <InputLabel style={{ marginTop: 16 }}>4.3. Major Milestones</InputLabel>
            <TextArea
              autoComplete="off"
              name="milestones"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.milestones}
            />

            <Checkbox
              name="service_design"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_design}
              style={{ marginTop: 64 }}
            >
              Your team will create low-fidelity and high-fidelity visual designs based on written and verbal requests from the Client.
            </Checkbox>
            <Checkbox
              name="service_collaboration"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_collaboration}
              style={{ marginTop: 8 }}
            >
              Your team will hold discovery meetings to meet with the Client, understand goals and requirements for the project, and provide recommendations on technical approach,
              design, and development process while producing deliverables through Figma.
            </Checkbox>
            <Checkbox
              name="service_brand"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_brand}
              style={{ marginTop: 8 }}
            >
              Your team will produce materials that assist with the development of a brand history, mission and values, brand logo, color scheme, typefaces, and other elements.
            </Checkbox>
            <Checkbox
              name="service_development"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_development}
              style={{ marginTop: 8 }}
            >
              Your team will write code and services to implement the entire design and provide instructions for Client for how to run and manage the deliverables themselves.
            </Checkbox>
            <Checkbox
              name="service_audits"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_audits}
              style={{ marginTop: 8 }}
            >
              Your team will actively involve their community in navigating user experiences and conducting thorough testing for bugs in the deliverables.
            </Checkbox>
            <Checkbox
              name="service_maintenance"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_maintenance}
              style={{ marginTop: 8 }}
            >
              Your team will commit to ensuring the seamless operation of web services, supporting a minimum of 5,000 active users monthly and accommodating up to 1,000,000 page
              visits each month.
            </Checkbox>
            <Checkbox
              name="service_launch"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_launch}
              style={{ marginTop: 8 }}
            >
              Your team pledges to provide comprehensive support for product launches, ensuring optimal performance and user satisfaction from inception through to market
              introduction.
            </Checkbox>
            <Checkbox
              name="service_embedding"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.checked });
              }}
              value={updates.service_embedding}
              style={{ marginTop: 8 }}
            >
              You team will engage proactively in your preferred communication channels, seamlessly integrating with your team as if we were full-time staff members.
            </Checkbox>
            <InputLabel style={{ marginTop: 64 }}>2. Our incorporation state</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_incorporation"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Alabama"
              style={{ marginTop: 8 }}
              value={updates.supplier_incorporation}
            />
            <InputLabel style={{ marginTop: 16 }}>2. Our incorporation address</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_incorporation_address"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="1000 Glenn Hearn Blvd SW, Huntsville, AL 35824"
              style={{ marginTop: 8 }}
              value={updates.supplier_incorporation_address}
            />
            <InputLabel style={{ marginTop: 16 }}>2. Our physical address</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_physical_address"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="2800 N Terminal Rd, Houston, TX 77032"
              style={{ marginTop: 8 }}
              value={updates.supplier_physical_address}
            />
            <InputLabel style={{ marginTop: 16 }}>3. When does the contract start?</InputLabel>
            <Input
              autoComplete="off"
              name="client_effective_date"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="February 20th, 2300"
              style={{ marginTop: 8 }}
              value={updates.client_effective_date}
            />
            <InputLabel style={{ marginTop: 16 }}>3. When does the contract end?</InputLabel>
            <Input
              autoComplete="off"
              name="client_end_date"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="December 20th, 2301"
              style={{ marginTop: 8 }}
              value={updates.client_end_date}
            />
            <InputLabel style={{ marginTop: 16 }}>5. Amount to charge client (dollars)</InputLabel>
            <Input
              autoComplete="off"
              name="supplier_amount_billed"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="1000000"
              style={{ marginTop: 8 }}
              type="number"
              value={updates.supplier_amount_billed}
            />

            <InputLabel style={{ marginTop: 64 }}>1. Client name</InputLabel>
            <Input
              autoComplete="off"
              name="client_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="The Not-Internet Hardware Company"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_name}
            />
            <InputLabel style={{ marginTop: 16 }}>1. Client billing address</InputLabel>
            <Input
              autoComplete="off"
              name="client_billing_address"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="3 Brewster Rd, Newark, NJ 07114"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_billing_address}
            />
            <InputLabel style={{ marginTop: 16 }}>1. Client place of incorporation or formation</InputLabel>
            <Input
              autoComplete="off"
              name="client_incorporation"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Kansas"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_incorporation}
            />
            <InputLabel style={{ marginTop: 16 }}>1. Who signs the document?</InputLabel>
            <Input
              autoComplete="off"
              name="client_signer"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Johanna Slith"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_signer}
            />
            <InputLabel style={{ marginTop: 16 }}>1. What is their role?</InputLabel>
            <Input
              autoComplete="off"
              name="client_title"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="CEO"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_title}
            />
            <InputLabel style={{ marginTop: 16 }}>1. What is their e-mail?</InputLabel>
            <Input
              autoComplete="off"
              name="client_email"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="work@microsoft.com"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_email}
            />
            <InputLabel style={{ marginTop: 16 }}>1. What is their legal e-mail? (optional)</InputLabel>
            <Input
              autoComplete="off"
              name="client_email_legal"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="legal@microsoft.com"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_email_legal}
            />
            <InputLabel style={{ marginTop: 16 }}>1. What is their billing or invoice e-mail? (optional)</InputLabel>
            <Input
              autoComplete="off"
              name="client_email_invoices"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="billing@microsoft.com"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_email_invoices}
            />
            <InputLabel style={{ marginTop: 16 }}>1. What is the billing contact name? (optional)</InputLabel>
            <Input
              autoComplete="off"
              name="client_contact_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Fred Durst"
              style={{ marginTop: 8 }}
              type="text"
              value={updates.client_contact_name}
            />
            <Button
              onClick={async () => {
                setLoading(true);
                const result = await onUpdateSOW({ id: currentSOW.id, key, showModal, updates });
                if (!result) {
                  setLoading(false);
                  return;
                }

                const results = await onRefreshSOW({ key, showModal });
                setLoading(false);
                if (!results) {
                  return;
                }

                setSOWs(results.data);
              }}
              style={{ marginTop: 24, width: '100%' }}
            >
              Save changes
            </Button>
            <ActionItem icon={`⭢`} href={`/examples/statement-of-work/${currentSOW.id}`} target="_blank" style={{ marginTop: 16 }}>
              View shareable statement of work
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

export default ExampleStatementOfWorks;
