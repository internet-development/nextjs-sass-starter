import * as React from 'react';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Checkbox from '@system/Checkbox';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Input from '@system/Input';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Select from '@system/Select';
import TextArea from '@system/TextArea';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const PLACEHOLDER = `First line of placeholder
Second line of placeholder
Third line of placeholder`;

const options = [
  { value: '1', label: 'Option A' },
  { value: '2', label: 'Option B' },
  { value: '3', label: 'Option C' },
];

function ExampleForms(props) {
  const [currentSelectValue, setSelectValue] = React.useState<string | null>(null);
  const [checked, setChecked] = React.useState(true);
  const [unchecked, setUnchecked] = React.useState(false);

  return (
    <Page
      title="nextjs-sass-starter: Components: Forms"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-forms"
    >
      <Navigation />
      <GridLayout>
        <ThinAppLayout style={{ background: `var(--color-background)`, borderTop: `1px solid var(--color-border)` }}>
          <FormHeading>Example Form</FormHeading>
          <FormParagraph>
            Developing a web form requires meticulous attention to several key elements to ensure it is both user-friendly and effective. Firstly, simplicity and clarity are
            paramount; the form should ask for only necessary information, avoiding any superfluous fields that could deter users.
          </FormParagraph>
          <div style={{ marginTop: 48 }}>
            <ActionItem icon={`⭡`}>Hide item example</ActionItem>
            <ActionItem icon={`⭢`}>Next item example</ActionItem>
            <ActionItem icon={`⭣`}>Show item example</ActionItem>
            <ActionItem icon={`⭠`} href="/">
              Return item example
            </ActionItem>
            <ActionItem icon={`⊹`}>Action item example</ActionItem>
          </div>

          <InputLabel style={{ marginTop: 24 }}>Input</InputLabel>
          <Input style={{ marginTop: 8 }} />
          <InputLabel style={{ marginTop: 24 }}>Input with placeholder</InputLabel>
          <Input style={{ marginTop: 8 }} placeholder="This is a placeholder" />
          <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
          <Input style={{ marginTop: 8 }} type="password" defaultValue="test123" />

          <InputLabel style={{ marginTop: 24 }}>Select with no options</InputLabel>
          <Select style={{ marginTop: 8 }} onChange={(e) => setSelectValue(e.target.value)} value={currentSelectValue} />

          <InputLabel style={{ marginTop: 24 }}>Select options</InputLabel>
          <Select style={{ marginTop: 8 }} onChange={(e) => setSelectValue(e.target.value)} options={options} value={currentSelectValue} />

          <InputLabel style={{ marginTop: 24 }}>Textarea</InputLabel>
          <TextArea style={{ marginTop: 8 }} />
          <InputLabel style={{ marginTop: 24 }}>Textarea with placeholder</InputLabel>
          <TextArea style={{ marginTop: 8 }} placeholder={PLACEHOLDER} />
          <Checkbox name="checked" onChange={(e) => setChecked(e.target.checked)} value={checked} style={{ marginTop: 16 }}>
            This is a description, the box should be checked.
          </Checkbox>
          <Checkbox name="unchecked" onChange={(e) => setUnchecked(e.target.checked)} value={unchecked} style={{ marginTop: 16 }}>
            This is a description, the box should not be checked. This description is longer to test how that would feel.
          </Checkbox>
          <Button href="#" style={{ marginTop: 48, width: '100%' }}>
            Submit
          </Button>
          <Button loading style={{ marginTop: 16, width: '100%' }}>
            This text should not render
          </Button>
        </ThinAppLayout>
      </GridLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleForms;
