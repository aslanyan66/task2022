import { handleActions } from 'redux-actions';
import initialState from '../../initialState';
import { FETCH_DATA, FETCH_MORE_DATA } from './types';

const initial = initialState.news;

const reducer = handleActions(
  {
    [FETCH_DATA]: (state, { payload: { next_page_token, stories } }) => {
      return {
        nextPageToken: next_page_token,
        stories
      };
    },
    [FETCH_MORE_DATA]: (state, { payload: { next_page_token, stories } }) => {
      return {
        nextPageToken: next_page_token,
        stories: [...state.stories, ...stories]
      };
    }
  },
  initial
);

export default reducer;
