import styles from './style.module.scss';
import Button from '../button';
import Select from '../select';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../store/common/filter/selector';
import { changeFilterData, resetFilterForm } from '../../store/common/filter/action';
import filterThunk from '../../store/common/filter/thunk';

const selectInitialState = {
  autoRefresh: false,
  order: false,
  languages: false
};

const FilterForm = ({ isOpenFilter }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(selectInitialState);
  const { chose: filterChoseData, filterData } = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('click', onSelectClose);

    // fake call for initial state
    onSelect('autoRefresh', { name: 'oneMin', label: '1 min', isActive: true });
    onSelect('order', { name: 'topRated', label: 'Top Rated', isActive: true });
    onSelect('languages', { name: 'selectAll', label: 'Select / Unselect All', isActive: true });

    return () => {
      window.removeEventListener('click', onSelectClose);
    };
  }, []);

  const onSelect = useCallback((selectName, data) => {
    const chose = {
      [selectName]: {
        name: selectName,
        value: data.isActive ? data.label.toLowerCase() : ''
      }
    };
    dispatch(changeFilterData(chose));
    dispatch(filterThunk[selectName](data));
  }, []);

  const onSelectClose = useCallback(() => setIsSelectOpen(selectInitialState), []);

  const onSelectOpen = useCallback((name) => {
    if (Object.values(isSelectOpen).some(Boolean)) {
      onSelectClose();
      return;
    }
    setIsSelectOpen({ ...selectInitialState, [name]: true });
  }, []);

  const onResetForm = () => dispatch(resetFilterForm());

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.selectControl}>
          {Object.entries(filterData).map(([selectName, selectList]) => (
            <Select
              list={Object.values(selectList)}
              selectName={filterChoseData[selectName].name}
              key={uuidv4()}
              onOpen={onSelectOpen}
              onClose={onSelectClose}
              isOpen={isSelectOpen[selectName]}
              activeValue={filterChoseData[selectName].value || ''}
              onSelect={onSelect}
            />
          ))}
          <Button className={styles.reset} onClick={onResetForm}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
