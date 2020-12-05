import React, { FC } from 'react';
import { Button, Grid, Modal, Typography } from '@material-ui/core';

import { Character } from 'src/types';

import { useCharacterDetails, useCallToAction } from './hooks';
import {
  CharacterModalContainer,
  CharacterModalAvatar,
  CharacterModalDetails,
  CharacterModalNameRow,
  CharacterModalChip,
  CharacterModalDetailsRow,
  CharacterModalButtonContainer,
  CharacterModalCloseButton,
} from './styled';
import { EpisodesList } from './components';

interface CharacterModalProps {
  character: Character;
}

export const CharacterModal: FC<CharacterModalProps> = ({ character }) => {
  const detailsItems = useCharacterDetails(character);
  const handleCTA = useCallToAction();

  return (
    <Modal open aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
      <CharacterModalContainer>
        <CharacterModalCloseButton />

        <Grid container direction="row">
          <CharacterModalAvatar alt={character.name} src={character.image} sizes="100" variant="rounded" />

          <CharacterModalDetails>
            <CharacterModalNameRow>
              <Typography variant="h5">{character.name}</Typography>
              <CharacterModalChip size="small" label={character.status} color="secondary" />
            </CharacterModalNameRow>

            {detailsItems.map(({ label, value }, index) => (
              <CharacterModalDetailsRow key={index}>
                <Typography variant="body1">{label} -</Typography>
                &nbsp;
                <Typography variant="body1">
                  <strong>{value}</strong>
                </Typography>
              </CharacterModalDetailsRow>
            ))}
          </CharacterModalDetails>
        </Grid>

        <CharacterModalButtonContainer container>
          <Button variant="contained" color="primary" onClick={handleCTA}>
            Buy merchandise
          </Button>
        </CharacterModalButtonContainer>

        <Grid container>
          <EpisodesList episodes={character.episode} />
        </Grid>
      </CharacterModalContainer>
    </Modal>
  );
};