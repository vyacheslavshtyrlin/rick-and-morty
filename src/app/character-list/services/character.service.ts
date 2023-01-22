import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { GetCharacterResponseInterface } from '../types/getCharactersResponse.interface';
import { Store } from '@ngrx/store';
import { FilterStateInterface } from 'src/app/filter-list/types/filterState.interface';
import { filterFeatureSelector } from 'src/app/filter-list/store/selectors';

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $status: String, $page: Int) {
    characters(page: $page, filter: { name: $name, status: $status }) {
      info {
        count
        pages
      }
      results {
        name
        gender
        status
        id
      }
    }
  }
`;

@Injectable()
export class CharacterSerivce {
  constructor(private apollo: Apollo, private store: Store) {}
  data: FilterStateInterface;

  getCharacters(): Observable<GetCharacterResponseInterface> {
    this.getFilterData();
    return this.apollo
      .query<GetCharacterResponseInterface>({
        query: GET_CHARACTERS,
        variables: this.data,
      })
      .pipe(map((result) => result.data));
  }

  private getFilterData(): any {
    return this.store
      .select(filterFeatureSelector)
      .subscribe((i: FilterStateInterface) => {
        this.data = i;
      });
  }
}
