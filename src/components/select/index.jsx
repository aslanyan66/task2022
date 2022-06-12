import styles from './styles.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { useCallback, useState } from 'react';
import Dropdown from './dropdown';

const Select = ({ list, selectName, activeValue, onOpen, onClose, isOpen, onSelect }) => {
  const handleDropdown = useCallback((e) => {
    e.stopPropagation();
    if (isOpen) {
      onClose();
    } else {
      onOpen(selectName);
    }
  }, []);

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.selectActive : ''}`}
      onClick={handleDropdown}>
      <div className={styles.container_left}>
        <p className={styles.title}>{activeValue}</p>
        <p className={styles.subtitle}>{selectName}</p>
      </div>
      <div className={styles.container_right}>
        <IoIosArrowDown color="#8c8c8c" />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <Dropdown {...{ list, onSelect, selectName }} />
        </div>
      )}
    </div>
  );
};

export default Select;
