import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchCharacters, resetState, selectCharactersTotalAmount } from 'src/redux/character';
import { buildQueryString } from 'src/utils/url';

/**
 * Logic to handle search query enter and request initiation
 */
export const useSearchQueryHandler = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCharactersTotalAmount);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value),
    []
  );

  const handleSubmit = useCallback(() => {
    const queryString = buildQueryString({ name: query });

    dispatch(resetState());
    dispatch(searchCharacters(queryString));
  }, [dispatch, query]);

  const handleReset = useCallback(() => {
    dispatch(resetState());
    setQuery('');
  }, [dispatch, setQuery]);

  return {
    query,
    handleInputChange,
    handleSubmit,
    handleReset,
    canReset: totalAmount > 0 || query !== '',
  };
};
