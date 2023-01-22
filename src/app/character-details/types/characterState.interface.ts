import { CharactereDetailsInterface } from "./characterDetails.interface";
import { GetCharacterDetailsResponseInterface } from "./getCharacterDetailsResponse.interface";

export interface CharacterDetailsStateInterface {
  isLoading: boolean,
  error: null | string,
  data: CharactereDetailsInterface | null
}
