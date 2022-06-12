import { handleActions } from 'redux-actions';
import initialState from '../../initialState';
import {
  CHOOSE_FILTER_DATA,
  HANDLE_REFRESH_TIMER_CHANGE,
  HANDLE_ORDER_CHANGE,
  HANDLE_LANGUAGE_CHANGE,
  HANDLE_FILTER_RESET
} from './types';
import { autoRefresh, languages } from '../../../config/filter';
import { v4 as uuidv4 } from 'uuid';

const initial = initialState.filter;

const reducer = handleActions(
  {
    [CHOOSE_FILTER_DATA]: (state, { payload }) => {
      return {
        ...state,
        chose: {
          ...state.chose,
          ...payload
        }
      };
    },
    [HANDLE_FILTER_RESET]: (state, { payload }) => {
      return initialState.filter;
    },
    [HANDLE_REFRESH_TIMER_CHANGE]: (state, { payload }) => {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          autoRefresh: {
            ...state.filterData.autoRefresh,
            ...payload
          }
        }
      };
    },
    [HANDLE_ORDER_CHANGE]: (state, { payload }) => {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          order: {
            ...state.filterData.order,
            ...payload
          }
        }
      };
    },
    [HANDLE_LANGUAGE_CHANGE]: (state, { payload }) => {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          languages: {
            ...state.filterData.languages,
            ...payload
          }
        }
      };
    }
  },
  initial
);

export default reducer;
