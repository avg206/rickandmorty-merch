import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Loader, CharacterView, Pagination } from 'src/components';
import { selectCharacterState, selectCharactersList } from 'src/redux/character';

import { useCharacterPagination } from './hooks';

export const SearchResults: FC = () => {
  const loading = useSelector(selectCharacterState);
  const characters = useSelector(selectCharactersList);
  const pagination = useCharacterPagination();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {characters.map((character) => (
        <CharacterView key={character.id} character={character} />
      ))}

      <Pagination {...pagination} />
    </>
  );
};
