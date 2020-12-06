import React, { FC, forwardRef } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import { EpisodesList } from 'src/components';
import { Character } from 'src/types';

import { useCharacterDetails, useCallToAction } from './hooks';
import {
  CharacterDetailsContainer,
  CharacterDetailsAvatar,
  CharacterDetailsDetails,
  CharacterDetailsNameRow,
  CharacterDetailsChip,
  CharacterDetailsDetailsRow,
  CharacterDetailsButtonContainer,
  CharacterDetailsCloseButton,
} from './styled';
interface CharacterDetailsProps {
  character: Character;
  onClose: () => void;
}

export const CharacterDetails: FC<CharacterDetailsProps> = forwardRef(({ character, onClose }, ref) => {
  const detailsItems = useCharacterDetails(character);
  const handleCTA = useCallToAction();

  return (
    <CharacterDetailsContainer ref={ref} tabIndex={-1}>
      <CharacterDetailsCloseButton onClick={onClose} />

      <Grid container direction="row">
        <CharacterDetailsAvatar alt={character.name} src={character.image} sizes="100" variant="rounded" />

        <CharacterDetailsDetails>
          <CharacterDetailsNameRow>
            <Typography variant="h5">{character.name}</Typography>
            <CharacterDetailsChip size="small" label={character.status} color="secondary" />
          </CharacterDetailsNameRow>

          {detailsItems.map(({ label, value }, index) => (
            <CharacterDetailsDetailsRow key={index}>
              <Typography variant="body1">{label} -</Typography>
              &nbsp;
              <Typography variant="body1">
                <strong>{value}</strong>
              </Typography>
            </CharacterDetailsDetailsRow>
          ))}
        </CharacterDetailsDetails>
      </Grid>

      <CharacterDetailsButtonContainer container>
        <Button variant="contained" color="primary" onClick={handleCTA}>
          Buy merchandise
        </Button>
      </CharacterDetailsButtonContainer>

      <Grid container>
        <EpisodesList episodes={character.episode} />
      </Grid>
    </CharacterDetailsContainer>
  );
});

CharacterDetails.displayName = 'CharacterDetails';
