import Header from '../header';
import { IconContext } from 'react-icons';
import Filter from '../filter';
import NewsList from '../newsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectChoseFilter } from '../../store/common/filter/selector';
import { getLanguage } from '../../utils/getLanguage';
import { getOrder } from '../../utils/getOrder';
import { useEffect, useMemo, useCallback, useRef, useState } from 'react';
import { fetchMoreNews, fetchNews } from '../../store/common/news/thunk';
import { getDelay } from '../../utils/getDelay';
import { selectNews } from '../../store/common/news/selector';
import { debounce } from '../../utils/debounce';

const App = () => {
  const { nextPageToken, stories } = useSelector(selectNews);
  const { autoRefresh, order, languages } = useSelector(selectChoseFilter);
  const dispatch = useDispatch();

  const delay = useMemo(() => getDelay(autoRefresh.value), [autoRefresh.value]);
  const timerRef = useRef(null);

  const fetchData = useMemo(
    () => ({
      limit: 20,
      lang: getLanguage(languages.value),
      order: getOrder(order.value),
      nextPageToken
    }),
    [languages.value, order.value]
  );

  const getNews = useCallback(
    debounce(() => dispatch(fetchNews(fetchData)), 2000),
    []
  );
  const fetchMoreData = useCallback(() => dispatch(fetchMoreNews(fetchData)), []);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (delay) {
      timerRef.current = setInterval(getNews, delay);
    }
  }, [delay]);

  return (
    <IconContext.Provider value={{ color: '#3971c1' }}>
      <div className="app">
        <Header />
        <div className="mainContainer">
          <main>
            <Filter onRefresh={getNews} />
            <div className="cardContainer">
              <NewsList fetchMoreData={fetchMoreData} stories={stories} />
            </div>
          </main>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default App;
