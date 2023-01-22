import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterDetailsStateInterface } from './types/characterState.interface';

export const characterDetailsFeatureSelector =
  createFeatureSelector<CharacterDetailsStateInterface>('characterDetails');

export const characterDetailsSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterState: CharacterDetailsStateInterface) => characterState.data
);

export const isLoadingSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterState: CharacterDetailsStateInterface) => characterState.isLoading
);

export const errorSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterState: CharacterDetailsStateInterface) => characterState.error
);
