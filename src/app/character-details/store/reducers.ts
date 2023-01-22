import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { from } from 'rxjs';
import {
  getCharacterDetailsAction,
  getCharacterDetailsFailureAction,
  getCharacterDetailsSuccessAction,
} from './actions/getCharactersDetails.action';
import { CharacterDetailsStateInterface } from '../types/characterState.interface';
const initalState: CharacterDetailsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const characterReducer = createReducer(
  initalState,
  on(
    getCharacterDetailsAction,
    (state): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCharacterDetailsSuccessAction,
    (state, action): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.data.character,
      error: null,
    })
  ),
  on(
    getCharacterDetailsFailureAction,
    (state): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      error: 'Произошла ошибка',
    })
  ),
  on(
    routerNavigationAction,
    (state): CharacterDetailsStateInterface => ({
      ...state,
      data: null,
    })
  )
);

export function reducers(
  state: CharacterDetailsStateInterface,
  action: Action
) {
  return characterReducer(state, action);
}
