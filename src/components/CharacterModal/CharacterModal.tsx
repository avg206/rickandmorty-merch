import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '@material-ui/core';

import { selectOpenedCharacter } from 'src/redux/character';
import { CharacterDetails } from 'src/components';

import { useCharacterCloser } from './hooks';

export const CharacterModal: FC = () => {
  const handleClose = useCharacterCloser();
  const openedCharacter = useSelector(selectOpenedCharacter);

  return (
    <Modal
      open={!!openedCharacter}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CharacterDetails character={openedCharacter} onClose={handleClose} />
    </Modal>
  );
};
