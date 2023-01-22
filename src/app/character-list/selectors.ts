import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterStateInterface } from './types/charactersState.interface';

export const characterFeatureSelector =
  createFeatureSelector<CharacterStateInterface>('character');

export const characterSelector = createSelector(
  characterFeatureSelector,
  (characterState: CharacterStateInterface) => characterState.data
);

export const isLoadingSelector = createSelector(
  characterFeatureSelector,
  (characterState: CharacterStateInterface) => characterState.isLoading
);

export const errorSelector = createSelector(
  characterFeatureSelector,
  (characterState: CharacterStateInterface) => characterState.error
);
