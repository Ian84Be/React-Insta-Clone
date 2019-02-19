import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
    state = {
      newSearch: '',
      posts: [],
      myName: 'dummyUser',
    };

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar
          onChange={this.formHandler}
          search={this.state.search}
          myName={this.state.myName}
          />

        <PostContainer
          myName={this.state.myName}
          posts={this.state.posts}
          />

      </div> //end App
    );
  }
}
export default App;
