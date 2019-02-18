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
        <i class="fab fa-instagram fa-2x"></i>
        <h1>INSTAGRANG</h1>
        <SearchBar />

        <div className="nav-icons">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
        </header>

        <PostContainer posts={this.state.posts}/>
      </div> //end App
    );
  }
}

export default App;
