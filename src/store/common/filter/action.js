import { createAction } from 'redux-actions';
import {
  CHOOSE_FILTER_DATA,
  HANDLE_REFRESH_TIMER_CHANGE,
  HANDLE_ORDER_CHANGE,
  HANDLE_LANGUAGE_CHANGE,
  HANDLE_FILTER_RESET
} from './types';

export const changeFilterData = createAction(CHOOSE_FILTER_DATA);
export const changeRefreshTimer = createAction(HANDLE_REFRESH_TIMER_CHANGE);
export const changeOrder = createAction(HANDLE_ORDER_CHANGE);
export const changeLanguage = createAction(HANDLE_LANGUAGE_CHANGE);
export const resetFilterForm = createAction(HANDLE_FILTER_RESET);
