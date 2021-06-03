import React from 'react';
import { Counter } from './features/reddit/Counter';
import { Header } from './features/Header/Header';
import { PostList } from './features/PostList/PostList';
import { Grid } from '@material-ui/core';

function App() {

  return (
    <div className='App'>
      <Grid container style={{ background: 'lightgray' }}>
        <Grid item xs={12} style={{ background: 'gray' }}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <PostList />
        </Grid>
        <Grid item xs={12}>
          <Counter />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
