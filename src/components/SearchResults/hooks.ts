import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  openPage,
  selectCharacter,
  characterSelectors,
  internalPageSize,
  searchCharacters,
  openCharacterDetails,
} from 'src/redux/character';
import { PaginationConfig } from 'src/types';

/**
 * Logic for character pagination
 */
export const useCharacterPagination = (): PaginationConfig => {
  const dispatch = useDispatch();
  const { internalPage, nextParams, totalItems } = useSelector(selectCharacter);
  const internalTotalAmount = useSelector(characterSelectors.selectTotal);

  const hasPrevPage = internalPage > 1;
  const hasNextPage = internalPage * internalPageSize < totalItems;

  const onPrev = useCallback(() => {
    dispatch(openPage(Math.max(internalPage - 1, 1)));
  }, [dispatch, internalPage]);

  const onNext = useCallback(() => {
    // If our virtual page is grater then actual amount of entities, we need to do next API call
    if ((internalPage + 1) * internalPageSize > internalTotalAmount && nextParams) {
      dispatch(searchCharacters(nextParams));
    }

    if (internalPage * internalPageSize < totalItems) {
      dispatch(openPage(internalPage + 1));
    }
  }, [dispatch, internalPage, internalTotalAmount, nextParams]);

  return {
    hasPrevPage,
    hasNextPage,
    page: internalPage,
    totalPages: Math.ceil(totalItems / internalPageSize),
    onPrev,
    onNext,
  };
};

/**
 * Callback to open character details with `id` as an argument
 */
export const useCharacterOpener = () => {
  const dispatch = useDispatch();

  return useCallback(
    (id: number) => {
      dispatch(openCharacterDetails(id));
    },
    [dispatch]
  );
};
