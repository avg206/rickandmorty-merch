import { Avatar, Paper, Chip, styled, Grid } from '@material-ui/core';

export const CharacterModalContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  width: 640,
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 60,
  maxHeight: 'calc(100vh - 120px)',
  height: '100vh',
  left: '50%',
  transform: 'translate(-50%, 0)',
}));

export const CharacterModalAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(0, 3, 0, 0),
  width: theme.spacing(22),
  height: theme.spacing(22),
}));

export const CharacterModalDetails = styled('div')(() => ({
  flex: 1,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

export const CharacterModalNameRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: theme.spacing(0, 0, 2, 0),
}));

export const CharacterModalChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, 1),
}));

export const CharacterModalDetailsRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  margin: theme.spacing(0, 0, 1, 0),
}));

export const CharacterModalButtonContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(6, 0, 2),
  justifyContent: 'center',
}));
