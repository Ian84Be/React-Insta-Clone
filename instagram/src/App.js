import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
    state = {
      filteredPosts: [],
      posts: [],
      myName: 'dummyUser',
    };

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  searchHandler = e => {
    let posts = this.state.posts.filter(post => post.username.includes(e.target.value));
    this.setState({filteredPosts: posts});
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar
          onChange={this.searchHandler}
          myName={this.state.myName}
          />

        <PostContainer
          myName={this.state.myName}
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
          />

      </div> //end App
    );
  }
}
export default App;
