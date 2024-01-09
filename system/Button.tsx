import styles from '@system/Button.module.scss';

import Loader from '@system/Loader';

export default function Button(props) {
  if (props.loading) {
    return (
      <div className={styles.loader} style={props.style}>
        <Loader />
      </div>
    );
  }

  if (props.href) {
    return <a className={styles.root} {...props} />;
  }

  return <button className={styles.root} {...props} />;
}
