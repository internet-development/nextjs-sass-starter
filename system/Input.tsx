import styles from '@system/Input.module.scss';

function Input(props) {
  return (
    <input
      className={styles.input}
      autoComplete="off"
      type={props.type ?? 'text'}
      name="key"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onInputChange(e)}
      />
  )
}

export default Input;



