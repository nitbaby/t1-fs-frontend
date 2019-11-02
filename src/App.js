import React from 'react';
import './App.css';
import TilePanel from './component/Tile'
import PostsPanel from './component/Post'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h6>Board</h6>
      </header>
      <PostsPanel />
      <TilePanel />
    </div>
  );
}

export default App;