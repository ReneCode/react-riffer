import React from "react";

import * as utility from "../utility/svg";
import Note, { nextNote, withoutOctave, isBlackNote } from "../models/Note";

interface KeyboardProps {
  showNotes: string;
}

class Keyboard extends React.Component<KeyboardProps> {
  getNotePointsOffset(note: Note) {
    const whiteNoteLeft = [0, 0, 0, 48, 16, 48, 16, 32, 10, 32, 10, 0];
    const blackNote = [0, 0, 0, 32, 12, 32, 12, 0];
    const whiteNoteMiddle = [
      0,
      32,
      0,
      48,
      16,
      48,
      16,
      32,
      10,
      32,
      10,
      0,
      6,
      0,
      6,
      32,
    ];
    const whiteNoteRight = [0, 32, 0, 48, 16, 48, 16, 0, 6, 0, 6, 32];

    const noteToPoints = {
      C: { points: whiteNoteLeft, offset: 10 },
      "C#": { points: blackNote, offset: 6 },
      D: { points: whiteNoteMiddle, offset: 10 },
      "D#": { points: blackNote, offset: 6 },
      E: { points: whiteNoteRight, offset: 16 },
      F: { points: whiteNoteLeft, offset: 10 },
      "F#": { points: blackNote, offset: 6 },
      G: { points: whiteNoteMiddle, offset: 10 },
      "G#": { points: blackNote, offset: 6 },
      A: { points: whiteNoteMiddle, offset: 10 },
      "A#": { points: blackNote, offset: 6 },
      B: { points: whiteNoteRight, offset: 16 },
    };
    const rawNote = withoutOctave(note as Note);
    const data = (noteToPoints as any)[rawNote];
    return { note, points: data.points, offset: data.offset };
  }

  render() {
    const black = "#444";
    const white = "rgb(218, 217, 214)";
    // const pressed = 'rgb(180, 180, 170)';

    const [start, stop] = this.props.showNotes.split(" ");
    const startNote = start as Note;
    const stopNote = nextNote(stop as Note);

    const notes = [];
    for (let note = startNote; note !== stopNote; note = nextNote(note)) {
      notes.push(this.getNotePointsOffset(note));
    }

    let offset = 0;
    const paths = notes.map((obj, idx) => {
      let blackNote = isBlackNote(obj.note);
      const ret = (
        <path
          key={idx}
          d={utility.toPath(obj.points, offset)}
          fill={blackNote ? black : white}
        />
      );
      offset += obj.offset;
      return ret;
    });

    return (
      <svg
        width="400"
        height="300"
        viewBox="0 0 170 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths}
      </svg>
    );
  }
}

export default Keyboard;
