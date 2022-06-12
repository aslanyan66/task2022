import styles from './styles.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        {new Array(3).fill().map((_) => (
          <span className={styles.bar} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
