import { createFeatureSelector, createSelector } from '@ngrx/store';
import { characterFeatureSelector } from 'src/app/character-list/selectors';
import { FilterStateInterface } from '../types/filterState.interface';

export const filterFeatureSelector =
  createFeatureSelector<FilterStateInterface>('filter');

export const filterDataSelector = createSelector(
  filterFeatureSelector,
  (state: FilterStateInterface) => state
);

export const paginationSelector = createSelector(
  filterFeatureSelector,
  characterFeatureSelector,
  (filter, character) => {
    return {
      currentPage: filter.page,
      pages: character.data.characters.info.pages,
    };
  }
);
