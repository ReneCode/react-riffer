
import * as Redux from 'redux';
import rootReducers from '../reducers';

const store = Redux.createStore(
  rootReducers,
  // tslint:disable-next-line: no-any
  (window as any).window.__REDUX_DEVTOOLS_EXTENSION__ && (window as any).window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
