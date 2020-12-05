import { Paper, Box, Button, styled } from '@material-ui/core';

export const SearchBoxContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  margin: theme.spacing(0, 0, 4, 0),
}));

export const SearchBoxInput = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: theme.spacing(0, 4, 0, 0),
}));

export const SearchBoxButtonGrid = styled(Box)(() => ({
  flex: 0,
  flexWrap: 'nowrap',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
}));

export const SearchBoxButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));
