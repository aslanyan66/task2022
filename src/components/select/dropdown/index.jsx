import { memo } from 'react';
import styles from './styles.module.scss';
import Checkbox from '../../checkbox';

const SelectDropdown = memo(({ list, onSelect, selectName }) => {
  const onCheckboxChange = (data) => {
    onSelect(selectName, data);
  };

  // console.log(list);
  return (
    <div className={styles.wrap} onClick={(e) => e.stopPropagation()}>
      <h3 className={styles.wrap_title}>{selectName}</h3>
      <div className={styles.container}>
        {list.map(({ id, isActive, label, name }) => (
          <label key={id} className={styles.label} htmlFor={id}>
            <Checkbox
              isActive={isActive}
              className={styles.checkbox}
              onChange={onCheckboxChange}
              name={name}
              label={label}
              id={id}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
});

export default SelectDropdown;
