import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    };
  }
  render() {
    // console.log(this.state.posts);

    return (

      <div className="App">
        <header className="App-header">
          instagrang
        <SearchBar />
        </header>

        <PostContainer posts={this.state.posts}/>
      </div> //end App
    );
  }
}

export default App;
