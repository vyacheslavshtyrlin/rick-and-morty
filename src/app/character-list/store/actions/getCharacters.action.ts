import { createAction, props } from '@ngrx/store';
import { GetCharacterResponseInterface } from '../../types/getCharactersResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getCharactersAction = createAction(ActionTypes.GET_CHARACTER);

export const getCharactersSuccessAction = createAction(
  ActionTypes.GET_CHARACTER_SUCCESS,
  props<{ data: GetCharacterResponseInterface }>()
);

export const getCharactersFailureAction = createAction(
  ActionTypes.GET_CHARACTER_FAILURE
);
