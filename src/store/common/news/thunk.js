import { getNews, getMoreNews } from './action';
import { CreateRequest } from '../../../utils/createRequest';

export const fetchNews =
  ({ limit, lang, order, nextPageToken }) =>
  async (dispatch) => {
    try {
      const response =
        await CreateRequest(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${limit}&languages=${lang},fr&order=${order}&page_token
=${nextPageToken}`);
      dispatch(getNews(response));
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchMoreNews =
  ({ limit, lang, order, nextPageToken }) =>
  async (dispatch) => {
    try {
      const response =
        await CreateRequest(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${limit}&languages=${lang},fr&order=${order}&page_token
=${nextPageToken}`);
      dispatch(getMoreNews(response));
    } catch (error) {
      console.log(error.message);
    }
  };
