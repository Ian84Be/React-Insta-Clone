import React, { Component } from 'react';
import './App.scss';

import LoginPage from './components/LoginPage/LoginPage';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  state = {
    filteredPosts: [],
    posts: [],
    myName: '',
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      myName: localStorage.getItem('user'),
    });
  }

  logIn = e => {
    e.preventDefault();
    localStorage.setItem('user', this.state.myName);
    window.location.reload();
  }

  logOut = e => {
    localStorage.clear();
    window.location.reload();
  }

  onMouseOver = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.classList);
    e.target.classList.toggle('hidden');
  }

  searchHandler = e => {
    let posts = this.state.posts.filter(post => post.username.includes(e.target.value));
    this.setState({ filteredPosts: posts });
  }

  render() {
    return (
      <div className="App">
        {/* if user is logged in, return the app, otherwise return login page */}
        {localStorage.getItem('user') ?
          <>
            <SearchBar
              logOut={this.logOut}
              myName={this.state.myName}
              onChange={this.searchHandler}
              onMouseOver={this.onMouseOver}
            />
            <PostContainer
              myName={this.state.myName}
              posts={
                this.state.filteredPosts.length > 0
                  ? this.state.filteredPosts
                  : this.state.posts
              } />
          </>
          : <LoginPage
            logIn={this.logIn}
            onChange={this.changeHandler}
            value={this.state.myName}
          />}
      </div> //end App
    );
  }
}
export default App;
