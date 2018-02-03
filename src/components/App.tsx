import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from '../store/store';

import Keyboard from './Keyboard';
import KeypressHandler from './KeypressHandler';

class App extends React.Component {

  constructor(props: React.Props < string >) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">riffer</h1>
          </header>
          <KeypressHandler />
          <div className="keyboard">
            <Keyboard/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
