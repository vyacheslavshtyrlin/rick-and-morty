import { createReducer, on, Action } from '@ngrx/store';
import { from } from 'rxjs';
import {
  getCharactersAction,
  getCharactersFailureAction,
  getCharactersSuccessAction,
} from './actions/getCharacters.action';
import { CharacterStateInterface } from '../types/charactersState.interface';
const initalState: CharacterStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const characterReducer = createReducer(
  initalState,
  on(
    getCharactersAction,
    (state): CharacterStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCharactersSuccessAction,
    (state, action): CharacterStateInterface => ({
      ...state,
      isLoading: false,
      data: action.data,
      error: null
    })
  ),
  on(
    getCharactersFailureAction,
    (state): CharacterStateInterface => ({
      ...state,
      isLoading: false,
      error: "Произошла ошибка"
    })
  )
);

export function reducers(state: CharacterStateInterface, action: Action) {
  return characterReducer(state, action);
}
