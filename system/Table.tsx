import styles from '@system/Table.module.scss';

import * as React from 'react';

import Checkbox from '@system/Checkbox';

export default function Table(props) {
  let gridTemplateColumns = props.isInteractive ? `40px repeat(${props.headings.length}, 1fr)` : `repeat(${props.headings.length}, 1fr)`;

  return (
    <div className={styles.table} role="grid" style={{ gridTemplateColumns, ...props.style }}>
      <header className={styles.header} role="row">
        {props.isInteractive ? <div className={styles.cell} /> : null}
        {props.headings.map((each, index) => {
          return (
            <div className={styles.cell} key={`${each}-heading-${index}`}>
              {each}
            </div>
          );
        })}
      </header>
      {props.data.map((each, index) => {
        const value = props.value ? !!props.value.includes(`${each.id}`) : false;
        const backgroundColor = value ? `var(--color-background-2)` : undefined;
        return (
          <div className={styles.row} key={`index-${each.id}`} role="row">
            {props.isInteractive ? (
              <div className={styles.column} style={{ backgroundColor }}>
                <Checkbox
                  checkboxStyle={{ marginLeft: 8, height: 16, width: 16 }}
                  name={each.id}
                  onChange={(e) => {
                    props.onChange({ [e.target.name]: e.target.value });
                  }}
                  value={value}
                />
              </div>
            ) : null}
            {each.data.map((col, index) => {
              return (
                <div className={styles.column} key={`${col}-data-${index}`} style={{ backgroundColor }}>
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
