import React from "react";
import Note from "../models/Note";

const KeypressHandler = ({
  playNote,
}: {
  playNote: (note: Note[]) => void;
}) => {
  React.useEffect(() => {
    const keyDown = (event: KeyboardEvent) => {
      const mapKeyToNote = {
        a: "C4",
        w: "C#4",
        s: "D4",
        e: "D#4",
        d: "E4",
        f: "F4",
        t: "F#4",
        g: "G4",
        z: "G#4",
        h: "A4",
        u: "A#4",
        j: "B4",
        k: "C5",
      };

      const key: string = event.key.toLowerCase();
      const note = (mapKeyToNote as any)[key];
      if (note) {
        playNote([note]);
      }
    };

    document.addEventListener("keydown", keyDown, false);
    return () => {
      document.removeEventListener("keydown", keyDown, false);
    };
  });

  return null;
};

export default KeypressHandler;
