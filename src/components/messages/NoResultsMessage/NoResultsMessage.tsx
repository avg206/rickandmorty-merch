import React from 'react';

import { NoResultsContainer, NoResultsIcon, NoResultsText } from './styled';

export const NoResultsMessage = () => (
  <NoResultsContainer>
    <NoResultsIcon color="error" />
    <NoResultsText variant="h6">Nothing found. Try to enter new query or reset search</NoResultsText>
  </NoResultsContainer>
);
