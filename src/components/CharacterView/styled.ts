import { Avatar, Paper, Typography, styled } from '@material-ui/core';

export const CharacterViewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  margin: theme.spacing(0, 0, 2, 0),
  display: 'flex',
  flexDirection: 'row',
}));

export const CharacterViewAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(0, 3, 0, 0),
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

export const CharacterViewDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const CharacterViewName = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
