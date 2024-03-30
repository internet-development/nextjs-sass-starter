import styles from '@system/layouts/demos/DemoRequiredEarningsCalculator.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Input from '@system/Input';

import { H1, H3, P, SubTitle, Text } from '@system/typography';
import { InputLabel } from '@system/typography/forms';

export default function DemoRequiredEarningsCalculator(props) {
  const [raised, setRaised] = React.useState(1000000);
  const [equity, setEquity] = React.useState(20);
  const [earnings, setEarnings] = React.useState(525000);
  const valuation = raised / (equity / 100);
  const multiple = valuation / earnings;
  const amount = valuation / multiple / 12;

  return (
    <>
      <div className={styles.top}>
        <Text>Required Monthly Earnings</Text>
      </div>
      <div className={styles.bottom}>
        <H1>{Utilities.formatDollars(amount)}</H1>
        <SubTitle style={{ marginTop: `1rem`, marginBottom: `4rem` }}>Per month</SubTitle>
        <ul className={styles.list}>
          <li>
            This company is raising <strong>{Utilities.formatDollars(raised)}</strong> and giving <strong>{equity}%</strong> equity in return.
          </li>
          <li>
            Theoretical Valuation (V) = Raised (R) × Equity (E) = <strong>{Utilities.formatDollars(valuation)} USD</strong>
          </li>
          <li>
            You expect the estimated annual earnings of similar companies to be <strong>{Utilities.formatDollars(earnings)} USD</strong>.
          </li>
          <li className={styles.listItem}>
            Multiple (N) = Valuation (V) ÷ Estimated annual earnings (EAE) = <strong>{multiple}</strong>
          </li>
          <li className={styles.listItem}>
            The calculation of the estimated annual earnings (EAE) is subjective and depends on the specific company, industry, and market conditions.
          </li>
          <li className={styles.listItem}>
            Required monthly earnings (RME) = (V ÷ N) ÷ 12 = <strong>{Utilities.formatDollars(amount)} USD</strong>
          </li>
        </ul>

        <InputLabel style={{ marginTop: 24 }}>Capital raised (USD)</InputLabel>
        <Input min="1" onChange={(e) => setRaised(e.target.value)} value={raised} type="number" style={{ marginTop: 8 }} />
        <InputLabel style={{ marginTop: 24 }}>Equity to investors (percentage)</InputLabel>
        <Input min="1" onChange={(e) => setEquity(e.target.value)} value={equity} type="number" style={{ marginTop: 8 }} />
        <InputLabel style={{ marginTop: 24 }}>Comparable companies' annual earnings (USD)</InputLabel>
        <Input min="1" onChange={(e) => setEarnings(e.target.value)} value={earnings} type="number" style={{ marginTop: 8 }} />
      </div>
    </>
  );
}
