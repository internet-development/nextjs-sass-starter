import styles from './Input.module.scss';

function Input(props) {
  return <input className={styles.input} {...props} />;
}

export default Input;
