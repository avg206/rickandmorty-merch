import { styled, Box } from '@material-ui/core';

export const PaginationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(4, 0, 0, 0),
}));
