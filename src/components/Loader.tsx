import React from 'react';
import { CircularProgress, styled } from '@material-ui/core';

const LoaderContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress size={50} />
    </LoaderContainer>
  );
};
