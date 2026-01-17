import React from 'react';
import { TwoColumnLayout } from '@/system/layouts';
import { ColumnChart } from '@/system/graphs';

const DataVisualizationExample = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h1>Data Visualization Example</h1>
        <p>This is an example of using the ColumnChart component.</p>
        <ColumnChart data={[
          { label: 'A', value: 10 },
          { label: 'B', value: 5 },
          { label: 'C', value: 15 },
        ]} />
      </div>
    </TwoColumnLayout>
  );
};

export default DataVisualizationExample;
