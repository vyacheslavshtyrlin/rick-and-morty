import { createReducer, on, Action } from '@ngrx/store';
import {
  changeFilterAction,
  nextPageAction,
  prevPageAction,
} from './actions/filter.action';
import { FilterStateInterface } from '../types/filterState.interface';
const initalState: FilterStateInterface = {
  name: '',
  status: '',
  page: 1,
};

const characterReducer = createReducer(
  initalState,
  on(
    changeFilterAction,
    (state, action): FilterStateInterface => ({
      ...state,
      name: action.data.name,
      status: action.data.status,
      page: initalState.page,
    })
  ),
  on(
    nextPageAction,
    (state): FilterStateInterface => ({
      ...state,
      page: state.page + 1,
    })
  ),
  on(
    prevPageAction,
    (state): FilterStateInterface => ({
      ...state,
      page: state.page - 1,
    })
  )
);

export function reducers(state: FilterStateInterface, action: Action) {
  return characterReducer(state, action);
}
