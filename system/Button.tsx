import styles from '@system/Button.module.scss';

export default function Button(props) {
  return <button className={styles.root}>{props.children}</button>;
}
