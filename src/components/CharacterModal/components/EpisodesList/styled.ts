import { Box, styled } from '@material-ui/core';

export const EpisodesListContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'row',
}));
