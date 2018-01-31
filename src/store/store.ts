
import * as Redux from 'redux';
import rootReducers from '../reducers';

const store = Redux.createStore(
  rootReducers
);

export default store;
