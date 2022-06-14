import { getNews, getMoreNews } from './action';
import { CreateRequest } from '../../../utils/createRequest';

export const fetchNews = (filterData) => async (dispatch) => {
  try {
    const response = await CreateRequest('stories', filterData);
    dispatch(getNews(response));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoreNews = (filterData) => async (dispatch) => {
  try {
    const response = await CreateRequest('stories', filterData);
    dispatch(getMoreNews(response));
  } catch (error) {
    console.log(error.message);
  }
};
