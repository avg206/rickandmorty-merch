import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchCharacters, resetSearch, selectCharacterTotalItems } from 'src/redux/character';
import { buildQueryString } from 'src/utils/url';

/**
 * Logic to handle search query enter and request initiation
 */
export const useSearchQueryHandler = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCharacterTotalItems);

  const [query, setQuery] = useState<string>('');

  const canReset = totalAmount > 0 || query !== '';

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value),
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const queryString = buildQueryString({ name: query });

      dispatch(resetSearch());
      dispatch(searchCharacters(queryString));
    },
    [dispatch, query]
  );

  const handleReset = useCallback(() => {
    dispatch(resetSearch());
    setQuery('');
  }, [dispatch, setQuery]);

  return {
    query,
    handleInputChange,
    handleSubmit,
    handleReset,
    canReset,
  };
};
