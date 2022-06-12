import styles from './styles.module.scss';

const UserToolBar = ({ src = '' }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="avatar" className={styles.avatar} />
      <span className={styles.arrowDown} />
    </div>
  );
};

export default UserToolBar;
