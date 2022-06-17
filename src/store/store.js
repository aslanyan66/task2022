import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import filter from './common/filter/reducer';
import news from './common/news/reducer';
const reducer = combineReducers({
  filter,
  news
});
const RootReducer = (state, action) => reducer(state, action);

export default createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
