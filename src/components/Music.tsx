import React, { useMemo } from "react";
import "./Music.css";

import Keyboard from "./Keyboard";
import KeypressHandler from "./KeypressHandler";
import Note from "../models/Note";

import SoundPlayer from "../utility/sound-player";

const Music = () => {
  const soundPlayer = useMemo(() => new SoundPlayer(), []);

  const playNode = (notes: Note[]) => {
    soundPlayer.play(notes[0]);
  };

  return (
    <React.Fragment>
      <header className="header">
        <h1 className="title">
          <a href="./REALBK1.PDF">Real Book</a>
        </h1>
      </header>
      <KeypressHandler playNote={playNode} />
      <div className="keyboard">
        <p>use keys a,s,d,f,g,h,j,k</p>
        <Keyboard showNotes="C3 E4" />
      </div>
    </React.Fragment>
  );
};

export default Music;
