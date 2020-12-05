import React from 'react';
import { TextField, Grid } from '@material-ui/core';

import { SearchBoxContainer, SearchBoxButtonGrid, SearchBoxButton } from './styled';

export const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <TextField label="Search query" fullWidth />
        </Grid>

        <SearchBoxButtonGrid item xs={12} md={4} lg={3}>
          <SearchBoxButton variant="contained" color="primary">
            Search
          </SearchBoxButton>
          <SearchBoxButton variant="contained">Reset</SearchBoxButton>
        </SearchBoxButtonGrid>
      </Grid>
    </SearchBoxContainer>
  );
};
