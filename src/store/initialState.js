import { autoRefresh, languages, order, chose } from '../config/filter';

const initialState = {
  filter: {
    chose,
    filterData: {
      autoRefresh,
      order,
      languages
    }
  },
  news: {
    nextPageToken: '',
    stories: [],
    isLoad: false
  }
};

export default initialState;
