import * as React from 'react';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import MonospacePreview from '@system/MonospacePreview';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import WideAppLayout from '@system/layouts/WideAppLayout';

import { FormHeading, FormParagraph } from '@system/typography/forms';

const TABLE_HEADINGS = [`Stock`, `Price`, `Description`];
const TABLE_DATA = [
  { id: 1, data: [`Microsoft (MSFT)`, `$407.48`, `Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington.`] },
  {
    id: 2,
    data: [
      `Apple (AAPL)`,
      `$182.63`,
      `Apple Inc. is an American hardware and software developer and technology company that develops and sells computers, smartphones and consumer electronics as well as operating systems and application software.`,
    ],
  },
  { id: 3, data: [`Saudi Aramco (2222.SR)`, `$8.52`, `Saudi Aramco is the Saudi Arabian national petroleum and natural gas company.`] },
  {
    id: 4,
    data: [`NVIDIA (NVDA)`, `$787.01`, `Nvidia Corporation is one of the largest developers of graphics processors and chipsets for personal computers and game consoles.`],
  },
  {
    id: 5,
    data: [`Amazon (AMZN)`, `$173.54`, `Amazon.com, Inc. is an American online retailer with a wide range of products.`],
  },
  {
    id: 6,
    data: [`Alphabet (Google) (GOOG)`, `$140.10`, `Alphabet Inc. is a listed US holding company of the former Google LLC, which continues to exist as a subsidiary.`],
  },
  {
    id: 7,
    data: [
      `Meta Platforms (Facebook)`,
      `$487.05`,
      `Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.`,
    ],
  },
  {
    id: 8,
    data: [
      `Berkshire Hathaway (BRK-B)`,
      `$408.91`,
      `Berkshire Hathaway Inc. is an American holding company, whose conglomerate includes over 80 companies with activities spanning a wide range of business areas, including insurance and reinsurance, rail freight, energy supply, financial services, manufacturing, and wholesale and retail.`,
    ],
  },
  {
    id: 9,
    data: [
      `Eli Lilly (LLY)`,
      `$765.00`,
      `With over 33,000 employees worldwide, production plants in 13 countries and annual sales of over $22 billion worldwide, Eli Lilly and Company is one of the largest pharmaceutical companies in the world.`,
    ],
  },
  {
    id: 10,
    data: [
      `TSMC (TSM)`,
      `$128.59`,
      `Taiwan Semiconductor Manufacturing Company, Limited is the world's third largest semiconductor manufacturer after Intel and Samsung and the world's largest independent contract manufacturer of semiconductor products.`,
    ],
  },
];

function ExampleTable(props) {
  const [selected, setSelected] = React.useState<any[]>([]);

  return (
    <Page
      title="nextjs-sass-starter: Components: Table"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-table"
    >
      <Navigation />
      <WideAppLayout>
        <FormHeading>Example Table (Interactive)</FormHeading>
        <FormParagraph style={{ maxWidth: 568 }}>
          Table components can be designed to accept props, allowing for customization of data, columns, styling, and behavior. This makes it flexible to use in a variety of
          contexts, from simple data displays to complex interactive data grids.
        </FormParagraph>
        <Table
          data={TABLE_DATA}
          headings={TABLE_HEADINGS}
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
        <MonospacePreview style={{ marginTop: 24, opacity: 1, maxWidth: 568 }} title="Selected Ids">
          {JSON.stringify(selected, null, 2)}
        </MonospacePreview>

        <FormHeading style={{ marginTop: 64 }}>Example Table</FormHeading>
        <FormParagraph style={{ maxWidth: 568 }}>This table is for presentation only. However interaction can be enabled through changing a prop.</FormParagraph>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} style={{ marginTop: 48 }} />
      </WideAppLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleTable;
