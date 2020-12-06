import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changePage,
  selectCharacter,
  characterSelectors,
  internalPageSize,
  searchCharacters,
  openDetails,
} from 'src/redux/character';
import { PaginationConfig } from 'src/types';

/**
 * Logic for character pagination
 */
export const useCharacterPagination = (): PaginationConfig => {
  const dispatch = useDispatch();
  const { internalPage, nextParams, totalAmount } = useSelector(selectCharacter);
  const internalTotalAmount = useSelector(characterSelectors.selectTotal);

  const hasPrevPage = internalPage > 1;
  const hasNextPage = internalPage * internalPageSize < totalAmount;

  const onPrev = useCallback(() => {
    dispatch(changePage(Math.max(internalPage - 1, 1)));
  }, [dispatch, internalPage]);

  const onNext = useCallback(() => {
    const newPage = internalPage + 1;

    // If our virtual page is grater then actual amount of entities, we need to do next API call
    if (newPage * internalPageSize > internalTotalAmount) {
      if (!nextParams) {
        return;
      }

      dispatch(searchCharacters(nextParams));
    }

    dispatch(changePage(newPage));
  }, [dispatch, internalPage, internalTotalAmount, nextParams]);

  return {
    hasPrevPage,
    hasNextPage,
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
      dispatch(openDetails(id));
    },
    [dispatch]
  );
};
