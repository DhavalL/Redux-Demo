import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducers/reducer';
import thunk from 'redux-thunk';

export const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
