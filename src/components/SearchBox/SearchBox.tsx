import React from 'react';
import { TextField, Grid } from '@material-ui/core';

import { SearchBoxContainer, SearchBoxInput, SearchBoxButtonGrid, SearchBoxButton } from './styled';
import { useSearchQueryHandler } from './hooks';

export const SearchBox = () => {
  const { query, handleInputChange, handleSubmit, handleReset, canReset } = useSearchQueryHandler();

  return (
    <SearchBoxContainer>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <SearchBoxInput>
            <TextField label="Search query" value={query} onChange={handleInputChange} fullWidth />
          </SearchBoxInput>

          <SearchBoxButtonGrid>
            <SearchBoxButton variant="contained" color="primary" type="submit">
              Search
            </SearchBoxButton>

            <SearchBoxButton variant="contained" disabled={!canReset} onClick={handleReset}>
              Reset
            </SearchBoxButton>
          </SearchBoxButtonGrid>
        </Grid>
      </form>
    </SearchBoxContainer>
  );
};
