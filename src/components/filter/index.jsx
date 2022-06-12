import styles from './style.module.scss';
import { IoMdRefresh } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa';
import Button from '../button';
import { useState, useCallback } from 'react';
import FilterForm from '../filterForm';

const Filter = ({ onRefresh }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleFilter = () => setIsOpenFilter(!isOpenFilter);

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h2 className={styles.container_inner_title}>Watchlist Name</h2>
        <div className={styles.container_inner_buttonsGroup}>
          <Button
            type="button"
            className={styles.refreshBtn}
            onClick={onRefresh}
            focusClassname={styles.btnActive}>
            <IoMdRefresh size={'25px'} />
            <span>Refresh</span>
          </Button>

          <Button
            type="button"
            className={styles.filterBtn}
            onClick={handleFilter}
            isFocusEffect={true}>
            <FaFilter size={'17px'} />
            <span>Filters</span>
          </Button>
        </div>
      </div>
      <div className={!isOpenFilter ? styles.disableFilter : styles.filterContainer}>
        <FilterForm isOpenFilter={isOpenFilter} />
      </div>
    </div>
  );
};

export default Filter;
