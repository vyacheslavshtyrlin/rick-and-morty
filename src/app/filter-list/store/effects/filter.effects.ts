import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, switchMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CharacterSerivce } from '../../../character-list/services/character.service';
import {
  getCharactersSuccessAction,
  getCharactersFailureAction,
} from '../../../character-list/store/actions/getCharacters.action';
import { changeFilterAction } from '../actions/filter.action';
import { GetCharacterResponseInterface } from '../../types/getCharactersResponse.interface';

@Injectable()
export class GetFiltredCharacter {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeFilterAction),
      switchMap(() => {
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
