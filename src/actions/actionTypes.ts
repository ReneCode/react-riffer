import Note from '../models/Note';

export enum ActionTypes {
  PLAY_NOTE = 'PLAY_NOTE',
  SET_SPEED = 'SET_SPEED'
}

export interface SetSpeedAction {
  type: ActionTypes.SET_SPEED;
  speed: number;
}

export interface PlayNoteAction {
  type: ActionTypes.PLAY_NOTE;
  notes: Note[];
}

export type Actions = 
  | PlayNoteAction
  | SetSpeedAction;
