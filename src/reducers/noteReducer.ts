
import Note from '../models/Note';
import { ActionTypes, SetSpeedAction, PlayNoteAction } from '../actions/actionTypes';

type NoteState = {
  currentNotes: Note[],
  speed: number
};

const initialState: NoteState = {
  currentNotes: [],
  speed: 120
};

const noteReducer = (state = initialState, action: SetSpeedAction | PlayNoteAction) => {
  switch (action.type) {
    case ActionTypes.PLAY_NOTE:
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
