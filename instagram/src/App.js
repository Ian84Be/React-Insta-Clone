import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          this is div.App.App-header
        </header>

        <SearchBar />
        <PostContainer />

      </div>
    );
  }
}

export default App;
