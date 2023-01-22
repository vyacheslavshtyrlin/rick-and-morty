import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { GetCharacterDetailsResponseInterface } from '../types/getCharacterDetailsResponse.interface';

const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      species
      id
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

@Injectable()
export class CharacterByIdSerivce {
  constructor(private apollo: Apollo) {}

  getCharactersById(
    id: string
  ): Observable<GetCharacterDetailsResponseInterface> {
    const data = {
      id: id,
    };
    return this.apollo
      .query<GetCharacterDetailsResponseInterface>({
        query: GET_CHARACTER_BY_ID,
        variables: data,
      })
      .pipe(map((result) => result.data));
  }
}
