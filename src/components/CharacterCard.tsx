import { Characters } from "../typings";

const CharacterCard = ({ character }: Characters) => {
  return (
    <div>
      <a>
        <img src={character.image} />
        <span>{character.id}</span>
        <p>{character.name}</p>
      </a>
    </div>
  );
};

export default CharacterCard;
