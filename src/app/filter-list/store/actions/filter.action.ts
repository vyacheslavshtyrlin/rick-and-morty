import { createAction, props } from '@ngrx/store';
import { GetCharacterResponseInterface } from '../../types/getCharactersResponse.interface';
import { ActionTypes } from '../actionTypes';
import { FilterStateInterface } from '../../types/filterState.interface';

export const changeFilterAction = createAction(
  ActionTypes.CHANGE_FILTER,
  props<{ data: FilterStateInterface }>()
);

export const prevPageAction = createAction(
  ActionTypes.PREV_PAGE,
);

export const nextPageAction = createAction(
  ActionTypes.NEXT_PAGE,
);

