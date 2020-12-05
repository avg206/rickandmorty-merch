import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Loader, CharacterView } from 'src/components';
import { selectCharacterState, characterSelectors } from 'src/redux/character';

export const SearchResults: FC = () => {
  const loading = useSelector(selectCharacterState);
  const characters = useSelector(characterSelectors.selectAll);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {characters.map((character) => (
        <CharacterView key={character.id} character={character} />
      ))}
    </>
  );
};
