import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Loader, CharacterView, Pagination, CharacterModal } from 'src/components';
import { selectCharacterState, selectCharactersList } from 'src/redux/character';

import { useCharacterPagination, useCharacterOpener } from './hooks';

export const SearchResults: FC = () => {
  const loading = useSelector(selectCharacterState);
  const characters = useSelector(selectCharactersList);
  const pagination = useCharacterPagination();
  const onCharacterOpen = useCharacterOpener();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {characters.map((character) => (
        <CharacterView key={character.id} character={character} onCharacterOpen={onCharacterOpen} />
      ))}

      <Pagination {...pagination} />

      <CharacterModal />
    </>
  );
};
