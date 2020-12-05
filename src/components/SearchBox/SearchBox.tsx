import React from 'react';
import { TextField, Grid } from '@material-ui/core';

import { SearchBoxContainer, SearchBoxButtonGrid, SearchBoxButton } from './styled';
import { useSearchQueryHandler } from './hooks';

export const SearchBox = () => {
  const { query, handleInputChange, handleSubmit } = useSearchQueryHandler();

  return (
    <SearchBoxContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <TextField label="Search query" value={query} onChange={handleInputChange} fullWidth />
        </Grid>

        <SearchBoxButtonGrid item xs={12} md={4} lg={3}>
          <SearchBoxButton variant="contained" color="primary" onClick={handleSubmit}>
            Search
          </SearchBoxButton>

          <SearchBoxButton variant="contained" disabled>
            Reset
          </SearchBoxButton>
        </SearchBoxButtonGrid>
      </Grid>
    </SearchBoxContainer>
  );
};
