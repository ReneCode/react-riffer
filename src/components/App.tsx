import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from '../store/store';

import Keyboard from './Keyboard';
import KeypressHandler from './KeypressHandler';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
            <a href="./REALBK1.PDF">Real Book</a>
            </h1>
          </header>
          <KeypressHandler />
          <div className="keyboard">
            <p>use keys a,s,d,f,g,h,j,k</p>
            <Keyboard showNotes="C3 E4" />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
