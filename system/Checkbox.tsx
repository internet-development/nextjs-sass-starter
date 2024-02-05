import styles from '@system/Checkbox.module.scss';

function Checkbox(props) {
  return (
    <div className={styles.section} style={props.style}>
      <input className={styles.input} type="checkbox" checked={props.value} name={props.name} onChange={props.onChange} />
      <div className={styles.right}>{props.children}</div>
    </div>
  );
}

export default Checkbox;
