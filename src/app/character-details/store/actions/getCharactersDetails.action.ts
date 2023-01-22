import { createAction, props } from '@ngrx/store';
import { GetCharacterDetailsResponseInterface } from '../../types/getCharacterDetailsResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getCharacterDetailsAction = createAction(
  ActionTypes.GET_CHARACTER_DETAILS,
  props<{ id: string }>()
);

export const getCharacterDetailsSuccessAction = createAction(
  ActionTypes.GET_CHARACTER_DETAILS_SUCCESS,
  props<{ data: GetCharacterDetailsResponseInterface }>()
);

export const getCharacterDetailsFailureAction = createAction(
  ActionTypes.GET_CHARACTER_DETAILS_FAILURE
);
