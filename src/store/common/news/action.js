import { createAction } from 'redux-actions';
import { FETCH_DATA, FETCH_MORE_DATA } from './types';

export const getNews = createAction(FETCH_DATA);
export const getMoreNews = createAction(FETCH_MORE_DATA);
