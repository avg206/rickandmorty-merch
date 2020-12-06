import { Paper, Typography, styled } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const WelcomeContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  padding: theme.spacing(2, 4),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const WelcomeIcon = styled(HelpOutlineIcon)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, 2),
}));
