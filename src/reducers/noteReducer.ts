
import Note from '../models/Note';
import { ActionTypes, Actions } from '../actions/actionTypes';
import SoundPlayer from '../utility/sound-player';

export type NoteState = {
  currentNotes: Note[],
  speed: number,
  soundPlayer: SoundPlayer;

};

const initialState: NoteState = {
  currentNotes: [],
  speed: 120,
  soundPlayer: new SoundPlayer()
};

const noteReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.PLAY_NOTE:
      state.soundPlayer.play(action.notes[0]);
      return {
        ...state,
        currentNotes: action.notes
      };

    case ActionTypes.SET_SPEED:
      return {
        ...state,
        speed: action.speed
      };

    default:
      return state;
  }
};

export default noteReducer;
