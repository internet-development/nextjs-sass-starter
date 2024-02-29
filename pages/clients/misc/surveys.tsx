import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Page from '@components/Page';
import Navigation from '@system/Navigation';
import SmallButton from '@system/documents/SmallButton';
import Table from '@system/Table';
import WideAppLayout from '@system/layouts/WideAppLayout';

import { FormHeading, FormParagraph } from '@system/typography/forms';

function ClientMiscSurveys(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [selected, setSelected] = React.useState<any[]>([]);

  const actions = (
    <span>
      <SmallButton style={{ marginRight: 8 }}>Regenerate</SmallButton>
      <SmallButton style={{ marginRight: 8 }}>Delete</SmallButton>
      <SmallButton style={{ marginRight: 8 }}>Send</SmallButton>
    </span>
  );
  const company = `ExCo`;
  const preview = <a href="#">Preview</a>;

  return (
    <Page title="Prototype: Surveys" description="This is a prototype." url="https://wireframes.internet.dev/clients/misc/surveys">
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />

      <WideAppLayout>
        <FormHeading>Distribute Survey Results</FormHeading>
        <FormParagraph style={{ maxWidth: 568 }}>
          Additionally, you can regenerate any report, which is beneficial for incorporating new information or details that may have emerged subsequently. While each report can be
          manually edited as necessary, please note that regenerating a report will require you to manually apply any changes once more.
        </FormParagraph>

        <FormParagraph style={{ maxWidth: 568 }}>
          This dashboard facilitates the delivery of survey results and team evaluation reports to each respective team. You have the option to preview each report before
          distribution.
        </FormParagraph>
        <Table
          data={[
            { id: 1, data: [`${company}`, 'June 1st, 2024', '156,000', 'John Smith', preview, actions] },
            { id: 2, data: [`${company} Research`, 'June 1st, 2024', '170', 'Jessica Woo', preview, actions] },
            { id: 3, data: [`${company} Research: Algorithms & optimization`, 'April 18th, 2024', '8', 'Gabriell Richards', preview, actions] },
            { id: 4, data: [`${company} Research: Applied science`, 'April 18th, 2024', '7', 'Sadie Aguilar', preview, actions] },
            { id: 5, data: [`${company} Research: Athena`, 'April 18th, 2024', '7', 'Laurie Donnelly', preview, actions] },
            { id: 6, data: [`${company} Research: Blueshift`, 'April 18th, 2024', '6', 'Owain Barton', preview, actions] },
            { id: 7, data: [`${company} Research: Climate and sustainability`, 'June 1st, 2024', '12', 'Mahdi Barr', preview, actions] },
            { id: 8, data: [`${company} Research: Cloud AI`, 'June 1st, 2024', '8', 'Angelo Freeman', preview, actions] },
            { id: 9, data: [`${company} Research: Cloud networking`, 'June 1st, 2024', '8', 'Sufyan Potts', preview, actions] },
            { id: 10, data: [`${company} Research: Graph mining`, 'June 1st, 2024', '6', 'Dalton Rollins', preview, actions] },
            { id: 11, data: [`${company} Research: Health`, 'June 1st, 2024', '4', 'Ayla Eaton', preview, actions] },
            { id: 12, data: [`${company} Research: India research lab`, 'June 1st, 2024', '22', 'Donald Lucero', preview, actions] },
            { id: 13, data: [`${company} Research: Language`, 'June 1st, 2024', '4', 'Jaxon Stuart', preview, actions] },
            { id: 14, data: [`${company} Research: Large-scale optimization`, 'June 1st, 2024', '3', 'Anisa Russo', preview, actions] },
            { id: 15, data: [`${company} Research: Learning theory`, 'June 1st, 2024', '3', 'Owais Willis', preview, actions] },
            { id: 16, data: [`${company} Research: Market algorithms`, 'June 1st, 2024', '2', 'Bianca Gilbert', preview, actions] },
            { id: 17, data: [`${company} Research: Network infrastructure`, 'June 1st, 2024', '6', 'Wilson Lester', preview, actions] },
            { id: 18, data: [`${company} Research: Operations research`, 'June 1st, 2024', '7', 'Emily Ruiz', preview, actions] },
            { id: 19, data: [`${company} Research: Perception`, 'June 1st, 2024', '18', 'Larissa Burch', preview, actions] },
            { id: 20, data: [`${company} Research: Responsible AI`, 'June 1st, 2024', '4', 'Jazmin Serrano', preview, actions] },
            { id: 21, data: [`${company} Research: Security, privacy, and abuse`, 'June 1st, 2024', '10', 'Barry Clayton', preview, actions] },
            { id: 22, data: [`${company} Research: Software engineering and programming languages`, 'June 1st, 2024', '21', 'Zaynab Rowland', preview, actions] },
            { id: 23, data: [`${company} Research: System performance`, 'June 1st, 2024', '4', 'Ezekiel Mathis', preview, actions] },
          ]}
          headings={['Team', 'Generation date', 'Employees', 'DRI', 'Preview', 'Actions']}
          isInteractive
          onChange={(each) => {
            Object.keys(each).forEach((id) => {
              if (!selected.includes(id)) {
                setSelected([...selected, id]);
                return;
              }

              setSelected(selected.filter((each) => each !== id));
            });
          }}
          style={{ marginTop: 48 }}
          value={selected}
        />
        <div style={{ marginTop: 24 }}>
          <Button style={{ minHeight: 48, marginRight: 16 }}>Regenerate selected</Button> <Button style={{ minHeight: 48 }}>Delete selected</Button>
        </div>
      </WideAppLayout>

      <GlobalModalManager currentModal={currentModal} onHandleThemeChange={Utilities.onHandleThemeChange} onSetModal={setModal} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ClientMiscSurveys;
