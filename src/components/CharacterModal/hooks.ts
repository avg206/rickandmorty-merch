import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeCharacterDetails } from 'src/redux/character';

/**
 * Callback to close character modal
 */
export const useCharacterCloser = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(closeCharacterDetails());
  }, [dispatch]);
};
