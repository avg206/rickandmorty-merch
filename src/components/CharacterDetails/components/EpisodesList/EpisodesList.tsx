import React, { FC } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { Episode } from 'src/types';

import { EpisodesListContainer } from './styled';

interface EpisodesListProps {
  episodes: Episode[];
}

export const EpisodesList: FC<EpisodesListProps> = ({ episodes }) => {
  return (
    <EpisodesListContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Air Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
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
