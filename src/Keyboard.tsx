import * as React from 'react';

import * as utility from './utility/svg';

const Keyboard = () => {

  const whiteNoteLeft = [0, 0, 0, 48, 16, 48, 16, 32, 10, 32, 10, 0];
  const blackNote = [0, 0, 0, 32, 12, 32, 12, 0];
  const whiteNoteMiddle = [0, 32, 0, 48, 16, 48, 16, 32, 10, 32, 10, 0, 6, 0, 6, 32];
  const whiteNoteRight = [0, 32, 0, 48, 16, 48, 16, 0, 6, 0, 6, 32];

  const black = '#444';
  const white = 'rgb(218, 217, 214)';
  const pressed = 'rgb(180, 180, 170)';

  return (
    <svg width="200" height="150" viewBox="0 0 32 50" xmlns="http://www.w3.org/2000/svg">
      <path d={utility.toPath(whiteNoteLeft)} fill={white} />
      <path d={utility.toPath(blackNote, 10)} fill={black} />
      <path d={utility.toPath(whiteNoteMiddle, 16)} fill={pressed} />
      <path d={utility.toPath(blackNote, 16 + 10)} fill={pressed} />
      <path d={utility.toPath(whiteNoteRight, 2 * 16)} fill={white} />
    </svg>
  );
};

export default Keyboard;
