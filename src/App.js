import React from 'react';
import { Counter } from './features/reddit/Counter';
import { Header } from './features/Header/Header';
import { PostList } from './features/PostList/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PostList />
        <Counter />
      </header>
    </div>
  );
}

export default App;
