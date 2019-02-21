import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      posts: dummyData,
      newSearch: '',
    };
  }

  formHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
        <i className="fab fa-instagram fa-2x"></i>
        <h1>INSTAGRANG</h1>
        <SearchBar
          onChange={this.formHandler}
          search={this.state.search}
          />

        <div className="nav-icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </div>
        </header>

        <PostContainer
          newComment={this.state.newComment}
          onChange={this.formHandler}
          posts={this.state.posts}
          />
      </div> //end App
    );
  }
}

export default App;
