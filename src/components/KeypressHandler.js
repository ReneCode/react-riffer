import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from '../models/Note';
import { playNoteAction } from '../actions';

class KeypressHandler extends Component {

  render() {
    return null;
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown.bind(this), false);
  }

  keyDown(event) {

    const mapKeyToNote = {
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
      this.props.playNote([note])
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playNote: (notes) => dispatch(playNoteAction(notes))
  };
}

export default connect(null, mapDispatchToProps)(KeypressHandler);
