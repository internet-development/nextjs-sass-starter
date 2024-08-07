import * as Queries from '@common/queries';
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

const DOCUMENT_TYPE = `EMPLOYEE_AGREEMENT`;

function ExampleEmploymentDocuments(props) {
  const { showModal } = useModal();

  const [documents, setDocuments] = React.useState<Array<any>>([]);
  const [currentDocument, setCurrentDocument] = React.useState<Record<string, any> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
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
      <FormHeading style={{ marginTop: 64 }}>Employee agreements</FormHeading>
      <FormParagraph>
        This is an example application using production data to manage, edit, and view the employee agreement templates for the Interent Development Studio Company ("INTDEV").
      </FormParagraph>
      <FormParagraph>
        Each employee agreement gets a unique page with a unique ID that is only discoverable if you share it. Although given that this is an employee agreement, you may not want
        to share it unless you're asking for an audit.
      </FormParagraph>
      <Button
        onClick={async () => {
          const result = await Queries.onUserCreateDocument({ key, type: DOCUMENT_TYPE });
          if (!result) {
            return;
          }

          const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE });
          if (!results) {
            return;
          }

          setDocuments(results.data);
        }}
        style={{ marginTop: 24, width: '100%' }}
      >
        Create
      </Button>
      <ActionItem
        icon={`⊹`}
        onClick={async () => {
          const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE });
          if (!results) {
            return;
          }

          setDocuments(results.data);
        }}
        style={{ marginTop: 16 }}
      >
        Refresh / list agreements
      </ActionItem>
    </div>
  );

  const details = (
    <div style={{ padding: `48px 24px 24px 24px` }}>
      {documents.map((each) => {
        return (
          <MonospacePreview
            isActive={currentDocument && each.id === currentDocument.id}
            key={each.id}
            onClick={() => {
              if (currentDocument && currentDocument.id === each.id) {
                return;
              }

              setCurrentDocument(each);

              setUpdates({
                employee_title: each.data.employee_title || '',
                employee_name: each.data.employee_name || '',
                employee_agreement_date: each.data.employee_agreement_date || '',
                employee_back_date: each.data.employee_back_date || '',
                employee_responsibilities: each.data.employee_responsibilities || '',
                employee_wage: each.data.employee_wage || '',
                employee_equity: each.data.employee_equity || '',
                employee_price: each.data.employee_price || '',
                manager_title: each.data.manager_title || '',
                manager_name: each.data.manager_name || '',
                manager_company: each.data.manager_company || '',
                manager_shorthand: each.data.manager_shorthand || '',
                manager_location_corporation: each.data.manager_location_corporation || '',
                manager_location: each.data.manager_location || '',
              });
            }}
            onDelete={async () => {
              const confirm = window.confirm(`Are you sure you want to delete ${each.id}? This action is irreversible.`);
              if (!confirm) {
                return;
              }

              const response = await Queries.onDeleteDocumentById({ id: each.id, key });

              const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE });
              if (!results) {
                return;
              }

              if (currentDocument && currentDocument.id === each.id) {
                setCurrentDocument(null);
              }

              setDocuments(results.data);
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

  const employmentAgreementURL = currentDocument ? `/examples/features/employment/${currentDocument.id}` : '#';

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ employment agreements"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/employment"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThreeColumnAppLayout sidebar={sidebar} details={details}>
        {updates && currentDocument ? (
          <div style={{ padding: `48px 24px 24px 24px` }}>
            <div>
              <ActionItem icon={`⭢`} href={employmentAgreementURL} target="_blank">
                View employee agreement
              </ActionItem>
            </div>
            <InputLabel style={{ marginTop: 32 }}>Employee name</InputLabel>
            <Input
              autoComplete="off"
              name="employee_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Frank Ocean"
              style={{ marginTop: 8 }}
              value={updates.employee_name}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee title</InputLabel>
            <Input
              autoComplete="off"
              name="employee_title"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Partner"
              style={{ marginTop: 8 }}
              value={updates.employee_title}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee agreement date</InputLabel>
            <Input
              autoComplete="off"
              name="employee_agreement_date"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="May 1st, 2024"
              style={{ marginTop: 8 }}
              value={updates.employee_agreement_date}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee back date</InputLabel>
            <Input
              autoComplete="off"
              name="employee_back_date"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="May 1st, 2024"
              style={{ marginTop: 8 }}
              value={updates.employee_back_date}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee wage</InputLabel>
            <Input
              autoComplete="off"
              name="employee_wage"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="$80,000 USD"
              style={{ marginTop: 8 }}
              value={updates.employee_wage}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee equity</InputLabel>
            <Input
              autoComplete="off"
              name="employee_equity"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="0.05%"
              style={{ marginTop: 8 }}
              value={updates.employee_equity}
            />
            <InputLabel style={{ marginTop: 16 }}>Employee share exercise price</InputLabel>
            <Input
              autoComplete="off"
              name="employee_price"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="$0.0001 USD"
              style={{ marginTop: 8 }}
              value={updates.employee_price}
            />
            <InputLabel style={{ marginTop: 16 }}>Responsibilities</InputLabel>
            <TextArea
              autoComplete="off"
              name="employee_responsibilities"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              style={{ marginTop: 8 }}
              value={updates.employee_responsibilities}
            />

            <InputLabel style={{ marginTop: 64 }}>Manager title</InputLabel>
            <Input
              autoComplete="off"
              name="manager_title"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Managing Partner"
              style={{ marginTop: 8 }}
              value={updates.manager_title}
            />

            <InputLabel style={{ marginTop: 16 }}>Manager name</InputLabel>
            <Input
              autoComplete="off"
              name="manager_name"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Phoebe Philo"
              style={{ marginTop: 8 }}
              value={updates.manager_name}
            />

            <InputLabel style={{ marginTop: 16 }}>Company name</InputLabel>
            <Input
              autoComplete="off"
              name="manager_company"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Eponymous"
              style={{ marginTop: 8 }}
              value={updates.manager_company}
            />

            <InputLabel style={{ marginTop: 16 }}>Company shorthand</InputLabel>
            <Input
              autoComplete="off"
              name="manager_shorthand"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="CELINE"
              style={{ marginTop: 8 }}
              value={updates.manager_shorthand}
            />

            <InputLabel style={{ marginTop: 16 }}>Company incorporation city, state</InputLabel>
            <Input
              autoComplete="off"
              name="manager_location_corporation"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Dover, DE"
              style={{ marginTop: 8 }}
              value={updates.manager_location_corporation}
            />

            <InputLabel style={{ marginTop: 16 }}>Company physical city, state</InputLabel>
            <Input
              autoComplete="off"
              name="manager_location"
              onChange={(e) => {
                setUpdates({ ...updates, [e.target.name]: e.target.value });
              }}
              placeholder="Phoenix, AZ"
              style={{ marginTop: 8 }}
              value={updates.manager_location}
            />

            <Button
              onClick={async () => {
                setLoading(true);
                const result = await Queries.onUpdateDocumentById({ id: currentDocument.id, key, updates });
                if (!result) {
                  setLoading(false);
                  return;
                }

                const results = await Queries.onRefreshDocuments({ key, type: DOCUMENT_TYPE });
                setLoading(false);
                if (!results) {
                  return;
                }

                setDocuments(results.data);
              }}
              style={{ marginTop: 24, width: '100%' }}
            >
              Save changes
            </Button>
            <ActionItem icon={`⭢`} href={employmentAgreementURL} target="_blank" style={{ marginTop: 16 }}>
              View employment agreement
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

export default ExampleEmploymentDocuments;
