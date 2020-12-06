import React from 'react';

import { WelcomeContainer, WelcomeIcon, WelcomeText } from './styled';

export const WelcomeMessage = () => (
  <WelcomeContainer>
    <WelcomeIcon color="primary" />
    <WelcomeText variant="h6">
      Type your search query or leave it empty to show all items, and perform search
    </WelcomeText>
  </WelcomeContainer>
);
