import { CharacterInterface } from './character.intrface';
export interface GetCharacterResponseInterface {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: CharacterInterface[];
  };
}
