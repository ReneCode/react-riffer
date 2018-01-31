
import Note from '../models/Note';
import { ActionTypes } from './actionTypes';

const playNoteAction = (notes: Note[]) => {
  return {
    type: ActionTypes.PLAY_NOTE,
    notes
  };
};

export {
  playNoteAction
};
