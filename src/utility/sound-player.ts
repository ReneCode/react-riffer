import { Howl } from "howler";

class SoundPlayer {
  sounds: Record<string, Howl> = {};
  notes: string[] = [];

  constructor() {
    this.setNotes();
  }

  play(note: string) {
    const sound = this.getSound(note);
    sound.play();
  }

  getSound(note: string): Howl {
    note = note.toUpperCase();
    let sound: Howl = this.sounds[note];
    if (sound) {
      return sound;
    }

    const noteFolder = "./notes/";
    const fileName = `${noteFolder}${
      this.notes.indexOf(note) + 1
    }-${note.replace("#", "-")}.mp3`;
    sound = new Howl({
      src: [fileName.toLowerCase()],
    });
    this.sounds[note] = sound;
    return sound;
  }

  setNotes() {
    const names = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];

    for (let octave = 0; octave < 8; octave++) {
      let startIdx = 0;
      if (octave === 0) {
        startIdx = names.indexOf("A");
      }
      for (let i = startIdx; i < names.length; i++) {
        this.notes.push(`${names[i]}${octave}`);
        if (octave === 8 && i === 0) {
          // finish on C8
          return;
        }
      }
    }
  }
}

export default SoundPlayer;
