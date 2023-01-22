import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, switchMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CharacterSerivce } from '../../services/character.service';
import {
  getCharactersAction,
  getCharactersSuccessAction,
  getCharactersFailureAction,
} from '../actions/getCharacters.action';
import { GetCharacterResponseInterface } from '../../types/getCharactersResponse.interface';

@Injectable()
export class GetCharacterEffect {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharactersAction),
      switchMap(({  }) => {
        return this.characterService.getCharacters().pipe(
          mergeMap((data: GetCharacterResponseInterface) => [
            getCharactersSuccessAction({ data }),
          ]),
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
