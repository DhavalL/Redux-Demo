import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducers/reducer';
import thunk from 'redux-thunk';

export const Store = createStore(
  reducer,
  applyMiddleware(thunk),
);
