import React from 'react';
import Head from 'next/head';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';

import { SearchBox, CharacterView, CharacterModal } from 'src/components';

import character1 from 'mocks/character-1';
import character2 from 'mocks/character-2';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4, 2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Rick and Morty Characters searcher</title>
      </Head>

      <Container className={classes.root}>
        <CssBaseline />

        <SearchBox />

        <CharacterView character={character1} />
        <CharacterView character={character2} />

        <CharacterModal character={character1} />
      </Container>
    </>
  );
};

export default Home;
