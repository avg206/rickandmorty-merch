import React, { FC } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { Loader } from 'src/components';

import { useEpisodesList } from './hooks';
import { EpisodesListContainer } from './styled';

interface EpisodesListProps {
  episodes: string[];
}

export const EpisodesList: FC<EpisodesListProps> = ({ episodes }) => {
  const episodesList = useEpisodesList(episodes);

  if (episodes.length === 0) {
    return null;
  }

  if (episodesList.length === 0) {
    return <Loader />;
  }

  return (
    <EpisodesListContainer>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Air Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodesList.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell component="th" scope="row">
                {episode.episode}
              </TableCell>
              <TableCell>{episode.name}</TableCell>
              <TableCell>{episode.air_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </EpisodesListContainer>
  );
};
