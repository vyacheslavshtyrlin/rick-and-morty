import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, switchMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  getCharacterDetailsAction,
  getCharacterDetailsFailureAction,
  getCharacterDetailsSuccessAction,
} from '../actions/getCharactersDetails.action';
import { GetCharacterDetailsResponseInterface } from '../../types/getCharacterDetailsResponse.interface';
import { CharacterByIdSerivce } from '../../services/characterDetails.service';

@Injectable()
export class GetCharacterDetailsEffect {
  getCharacterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacterDetailsAction),
      switchMap(({id}) => {
        console.log(id)
        return this.characterService.getCharactersById(id).pipe(
          mergeMap((data: GetCharacterDetailsResponseInterface) => [
            getCharacterDetailsSuccessAction({ data }),
          ]),
          catchError(() => {
            return of(getCharacterDetailsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterByIdSerivce
  ) {}
}
