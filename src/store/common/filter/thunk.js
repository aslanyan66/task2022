import { autoRefresh, languages, order } from '../../../config/filter';
import { changeLanguage, changeOrder, changeRefreshTimer } from './action';
import { v4 as uuidv4 } from 'uuid';

const resetFilterData = (data) =>
  Object.entries(data).reduce(
    (aggr, [key, value]) => ({
      ...aggr,
      [key]: {
        ...value,
        id: uuidv4()
      }
    }),
    {}
  );

const selectAllLanguages = (data) =>
  Object.entries(data).reduce(
    (aggr, [key, value]) => ({
      ...aggr,
      [key]: {
        ...value,
        isActive: true,
        id: uuidv4()
      }
    }),
    {}
  );

export const handleRefreshList = (data) => (dispatch) => {
  const current = resetFilterData(autoRefresh);
  if (data.isActive) {
    current[data.name].isActive = data.isActive;
  }
  dispatch(changeRefreshTimer(current));
};

export const handleOrderList = (data) => (dispatch) => {
  const current = resetFilterData(order);
  if (data.isActive) {
    current[data.name].isActive = data.isActive;
  }
  dispatch(changeOrder(current));
};

export const handleLanguageList = (data) => (dispatch) => {
  const { name, isActive } = data;
  let current;
  if (name.toLowerCase().includes('all') && isActive) {
    current = selectAllLanguages(languages);
  } else {
    current = resetFilterData(languages);
    current[data.name].isActive = data.isActive;
  }
  dispatch(changeLanguage(current));
};

export default {
  autoRefresh: handleRefreshList,
  order: handleOrderList,
  languages: handleLanguageList
};
