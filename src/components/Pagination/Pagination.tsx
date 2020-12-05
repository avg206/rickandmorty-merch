import React, { FC } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import { PaginationConfig } from 'src/types';

import { PaginationContainer } from './styled';

export const Pagination: FC<PaginationConfig> = ({ hasNextPage, hasPrevPage, onNext, onPrev }) => (
  <PaginationContainer>
    <ButtonGroup color="primary">
      <Button disabled={!hasPrevPage} onClick={onPrev}>
        Prev page
      </Button>
      <Button disabled={!hasNextPage} onClick={onNext}>
        Next page
      </Button>
    </ButtonGroup>
  </PaginationContainer>
);
