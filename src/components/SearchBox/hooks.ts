import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchCharacters } from 'src/redux/character/actions';

/**
 * Logic to handle search query enter and request initiation
 */
export const useSearchQueryHandler = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value),
    []
  );

  const handleSubmit = useCallback(() => {
    dispatch(searchCharacters(query));
  }, [dispatch, query]);

  return {
    query,
    handleInputChange,
    handleSubmit,
  };
};
