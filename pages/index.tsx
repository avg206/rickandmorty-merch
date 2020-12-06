import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';

import store from 'src/redux/store';
import { SearchBox, SearchResults } from 'src/components';

const useStyles = makeStyles((theme) => ({
  root: {
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

      <Provider store={store}>
        <Container className={classes.root}>
          <CssBaseline />

          <SearchBox />
          <SearchResults />
        </Container>
      </Provider>
    </>
  );
};

export default Home;
