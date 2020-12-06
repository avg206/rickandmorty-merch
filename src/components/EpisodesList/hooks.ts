import { useEffect, useState } from 'react';

import { apiCall } from 'src/utils/api';
import { Episode } from 'src/types';

/**
 * Load episode details
 */
export const useEpisodesList = (episodes: string[]): Episode[] => {
  const [list, setList] = useState<Episode[]>([]);

  useEffect(() => {
    const ids = episodes.map((episode) => episode.split('/').slice(-1)[0]).join(',');

    if (episodes.length === 1) {
      apiCall<Episode>(`https://rickandmortyapi.com/api/episode/${ids}`).then((results) => {
        setList([results]);
      });
    } else {
      apiCall<Episode[]>(`https://rickandmortyapi.com/api/episode/${ids}`).then((results) => {
        setList(results);
      });
    }
  }, [episodes]);

  return list;
};
