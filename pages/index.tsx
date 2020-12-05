import React from 'react';
import Head from 'next/head';
import { CssBaseline, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
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
      </Container>
    </>
  );
};

export default Home;
