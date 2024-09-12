import styles from '@system/documents/SmallButton.module.scss';

export default function SmallButton(props) {
  if (props.href) {
    return <a href={props.href} target={props.target} children={props.children} className={styles.root} style={props.style} />;
  }

  return <button children={props.children} className={styles.root} disabled={props.disabled} onClick={props.onClick} style={props.style} />;
}
