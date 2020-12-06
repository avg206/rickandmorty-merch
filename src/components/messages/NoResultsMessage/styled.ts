import { Paper, Typography, styled } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

export const NoResultsContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  padding: theme.spacing(2, 4),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const NoResultsIcon = styled(WarningIcon)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

export const NoResultsText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, 2),
}));
