import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Loader, CharacterView, Pagination, CharacterModal } from 'src/components';
import { WelcomeMessage, NoResultsMessage } from 'src/components/messages';
import { selectCharacterState, selectCharactersList, selectCharacterLoadedStatus } from 'src/redux/character';

import { useCharacterPagination, useCharacterOpener } from './hooks';

export const SearchResults: FC = () => {
  const loading = useSelector(selectCharacterState);
  const loaded = useSelector(selectCharacterLoadedStatus);
  const characters = useSelector(selectCharactersList);
  const pagination = useCharacterPagination();
  const onCharacterOpen = useCharacterOpener();

  const anyCharacterLoaded = characters.length > 0;

  if (loading) {
    return <Loader />;
  }

  if (loaded && anyCharacterLoaded) {
    return (
      <>
        {characters.map((character) => (
          <CharacterView key={character.id} character={character} onCharacterOpen={onCharacterOpen} />
        ))}

        <Pagination {...pagination} />

        <CharacterModal />
      </>
    );
  }

  if (loaded && !anyCharacterLoaded) {
    return <NoResultsMessage />;
  }

  return <WelcomeMessage />;
};
