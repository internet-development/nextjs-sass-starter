import * as React from 'react';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TextSwapper from '@system/animations/TextSwapper';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H3 } from '@system/typography';

const TABLE_HEADINGS = [``, `Component`, `Animation`, `Preview`];

function ExampleAnimationsTypeSwapping(props) {
  const containerStyles = { background: `var(--theme-text)`, borderRadius: 8, color: `var(--theme-background)`, minWidth: 228, padding: `8px 24px 8px 24px` };

  const TABLE_DATA = [
    {
      id: 1,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Fade</Tag>,
        <H3>
          Even the best maps are <TextSwapper strings={['imperfect', 'flawed', 'unfinished']} />
        </H3>,
      ],
    },
    {
      id: 2,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Fade with container styles</Tag>,
        <H3>
          My lord, the great houses have <TextSwapper strings={['answered', 'returned', 'fought back']} style={containerStyles} />
        </H3>,
      ],
    },
    {
      id: 3,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Blur</Tag>,
        <H3>
          Almost everyone can anticipate the immediate <TextSwapper animationType="blur" strings={['impact', 'results', 'outcomes', 'changes']} /> of their actions
        </H3>,
      ],
    },
    {
      id: 4,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Blur with container styles</Tag>,
        <H3>
          If I push on a wall, physics tells me that the wall pushes <TextSwapper animationType="blur" strings={['back', 'as well', 'too', 'in unison']} style={containerStyles} />
        </H3>,
      ],
    },
    {
      id: 5,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide down</Tag>,
        <H3>
          When you are honest about where your knowledge is lacking, you know where you are vulnerable and where you can{' '}
          <TextSwapper animationType="slideDown" strings={['improve', 'grow', 'level up', 'change']} />
        </H3>,
      ],
    },
    {
      id: 6,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide down with container styles</Tag>,
        <H3>
          The Madhi is too&nbsp;
          <TextSwapper animationType="slideDown" strings={['humble', 'smart', 'naive', 'calculated']} style={containerStyles} /> to say He is the Madhi
        </H3>,
      ],
    },
    {
      id: 7,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide up</Tag>,
        <H3>
          First-principles thinking is one of the best ways to reverse-engineer <TextSwapper animationType="slideUp" strings={['complicated', 'messy', 'tangled', 'difficult']} />{' '}
          situations and unleash creative possibility
        </H3>,
      ],
    },
    {
      id: 8,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide up with container styles</Tag>,
        <H3>
          You are not <TextSwapper animationType="slideUp" strings={['prepared', 'interested', 'tested', 'capable']} style={containerStyles} /> for what is to come
        </H3>,
      ],
    },
    {
      id: 9,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide left</Tag>,
        <H3>
          Hanlon’s Razor states that we should not attribute to malice that which is more easily explained by{' '}
          <TextSwapper animationType="slideLeft" strings={['stupidity', 'obtuseness', 'negligence', 'apathy']} />
        </H3>,
      ],
    },
    {
      id: 10,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide left with container styles</Tag>,
        <H3>
          Take my life Usul, it is the <TextSwapper animationType="slideLeft" strings={['only', 'best', 'greatest', 'easiest']} style={containerStyles} /> way
        </H3>,
      ],
    },
    {
      id: 11,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide right</Tag>,
        <H3>
          I am pointing the <TextSwapper animationType="slideRight" strings={['way', 'direction', 'to the beginning', 'to the end']} />
        </H3>,
      ],
    },
    {
      id: 12,
      data: [
        ``,
        <Tag>H3</Tag>,
        <Tag>Slide right with container styles</Tag>,
        <H3>
          The visions are clear now. I see possible <TextSwapper animationType="slideRight" strings={['futures', 'meals', 'lovers', 'wars']} style={containerStyles} />, all at once
        </H3>,
      ],
    },
  ];

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ text swapping"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/text-swapping"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebar={<GridLayout />}>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} style={{ marginTop: 64 }} />
      </TwoColumnLayoutFull>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleAnimationsTypeSwapping;
