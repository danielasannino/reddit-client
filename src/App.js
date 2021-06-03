import React from 'react';
import { Header } from './features/Header/Header';
import { PostList } from './features/PostList/PostList';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

function App() {

  return (
    <div className='App'>
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={8} align-items='center'>
            <PostList />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
