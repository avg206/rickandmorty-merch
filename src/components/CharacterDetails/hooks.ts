import { useCallback, useMemo } from 'react';

import { Character } from 'src/types';

/**
 * Generate string with species of character and add `type` is presented
 */
const getCharacterSpecies = (character: Character): string => {
  if (character.type) {
    return `${character.species} (${character.type})`;
  }

  return character.species;
};

/**
 * Generate list of detail's items
 */
export const useCharacterDetails = (character: Character) => {
  return useMemo(
    () =>
      [
        { label: 'Gender', value: character.gender },
        { label: 'Species', value: getCharacterSpecies(character) },
        { label: 'Origin', value: character.origin.name },
        { label: 'Last seen', value: character.location.name },
      ].filter(({ value }) => !!value),
    [character]
  );
};

/**
 * Handle logic for `Call To Action`
 */
export const useCallToAction = () => {
  return useCallback(() => {
    alert('Merchandise was clicked, maybe later redirect will be implemented :)');
  }, []);
};
