import { GetCharacterResponseInterface } from './getCharactersResponse.interface';




export interface CharacterStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetCharacterResponseInterface | null;
}
