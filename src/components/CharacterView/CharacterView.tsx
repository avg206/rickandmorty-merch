import React, { FC, useCallback } from 'react';
import { Typography } from '@material-ui/core';

import { Character } from 'src/types';

import { CharacterViewContainer, CharacterViewAvatar, CharacterViewDetails, CharacterViewName } from './styled';

interface CharacterViewProps {
  character: Character;
  onCharacterOpen: (id: number) => void;
}

export const CharacterView: FC<CharacterViewProps> = ({ character, onCharacterOpen }) => {
  const handleClick = useCallback(() => {
    onCharacterOpen(character.id);
  }, [onCharacterOpen, character]);

  return (
    <CharacterViewContainer onClick={handleClick}>
      <CharacterViewAvatar alt={character.name} src={character.image} sizes="100" variant="rounded" />

      <CharacterViewDetails>
        <CharacterViewName variant="h6">
          {character.name}
          &nbsp;&nbsp;
          <Typography color="secondary">({character.episode.length} episodes)</Typography>
        </CharacterViewName>

        <Typography variant="body1">Last seen at {character.location.name}</Typography>
      </CharacterViewDetails>
    </CharacterViewContainer>
  );
};
