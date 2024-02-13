import styles from '@system/typography/Typography.module.scss';

export function FormHeading(props) {
  return <h1 className={styles.formHeading} {...props} />;
}

export function FormSubHeading(props) {
  return <h2 className={styles.formSubHeading} {...props} />;
}

export function FormParagraph(props) {
  return <div className={styles.formCaption} {...props} />;
}

export function InputLabel(props) {
  return <label className={styles.inputLabel} {...props} />;
}
