import * as React from 'react';
import './App.css';

import Keyboard from './Keyboard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">riffer</h1>
        </header>
        <div className="keyboard">
          <Keyboard/>
        </div>
      </div>
    );
  }
}

export default App;
