import styles from '@system/layouts/Content.module.scss';

export default function Content(props) {
  const { children, id, tabIndex, ...rest } = props;
  return (
    <div className={styles.root} id={id} tabIndex={tabIndex} {...rest}>
      {children}
    </div>
  );
}

