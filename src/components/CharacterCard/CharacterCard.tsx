import { Characters } from "../../typings";
import {
  StyledCard,
  StyledCardInfo,
  StyledImageCard,
} from "./CharacterCard.style";

const CharacterCard = ({ character }: Characters) => {
  return (
    <StyledCard>
      <StyledImageCard>
        <img src={character.image} alt="card-image" />
      </StyledImageCard>
      <StyledCardInfo>
        <span>{character.name}</span>
        <span>{character.species}</span>
      </StyledCardInfo>
    </StyledCard>
  );
};

export default CharacterCard;
