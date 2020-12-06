import { Avatar, Paper, Chip, styled, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const CharacterDetailsContainer = styled(Paper)(({ theme }) => ({
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
  overflowY: 'auto',
}));

export const CharacterDetailsAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(0, 3, 0, 0),
  width: theme.spacing(22),
  height: theme.spacing(22),
}));

export const CharacterDetailsDetails = styled('div')(() => ({
  flex: 1,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

export const CharacterDetailsNameRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: theme.spacing(0, 0, 2, 0),
}));

export const CharacterDetailsChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, 1),
}));

export const CharacterDetailsDetailsRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  margin: theme.spacing(0, 0, 1, 0),
}));

export const CharacterDetailsButtonContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(6, 0, 6),
  justifyContent: 'center',
}));

export const CharacterDetailsCloseButton = styled(CloseIcon)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.5,
  },
}));
