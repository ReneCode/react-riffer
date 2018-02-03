import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Note from '../models/Note';
import { playNoteAction } from '../actions';
import { NoteState } from '../reducers/noteReducer';

interface StateToProps {
}

interface DispatchToProps {
  playNote: (note: Note[]) => void;
}

class KeypressHandler extends React.Component<DispatchToProps> {

  render() {
    return null;
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown.bind(this), false);
  }

  keyDown(event: React.KeyboardEvent<HTMLDocument>) {

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
      this.props.playNote([note]);
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<NoteState>): DispatchToProps => {
  return {
    playNote: (notes: Note[]) => dispatch(playNoteAction(notes))
  };
};

export default connect<StateToProps, DispatchToProps>(null, mapDispatchToProps)(KeypressHandler);
