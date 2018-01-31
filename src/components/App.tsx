import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from '../store/store';

import Keyboard from './Keyboard';
import KeypressHandler from './KeypressHandler';

import SoundPlayer from '../utility/sound-player';

class App extends React.Component {
  soundPlayer: SoundPlayer;

  constructor(props: React.Props < string >) {
    super(props);

    this.soundPlayer = new SoundPlayer();
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

  componentWillMount() {
    document.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown.bind(this), false);
  }

  keyDown(event: KeyboardEvent) {

    const mapKeyToNote: object = {
      'a': 'C4',
      'w': 'C#4',
      's': 'D4',
      'e': 'D#4',
      'd': 'E4',
      'f': 'F4',
      't': 'F#4',
      'g': 'G4',
      'z': 'G#4',
      'h': 'A4',
      'u': 'A#4',
      'j': 'B4',
      'k': 'C5'
    };

    const note = mapKeyToNote[
      event
        .key
        .toLowerCase()
    ];
    if (note) {
      this
        .soundPlayer
        .play(note);
    }
  }
}

export default App;
