import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, switchMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CharacterSerivce } from '../../../character-list/services/character.service';
import {
  getCharactersSuccessAction,
  getCharactersFailureAction,
} from '../../../character-list/store/actions/getCharacters.action';
import { nextPageAction, prevPageAction } from '../actions/filter.action';
import { GetCharacterResponseInterface } from '../../types/getCharactersResponse.interface';

@Injectable()
export class PaginationEffect {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextPageAction, prevPageAction),
      switchMap(({}) => {
        return this.characterService.getCharacters().pipe(
          map((data: GetCharacterResponseInterface) =>
            getCharactersSuccessAction({ data })
          ),
          catchError(() => {
            return of(getCharactersFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterSerivce
  ) {}
}
