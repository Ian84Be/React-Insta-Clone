import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {
    state = {
      newComment: '',
      newSearch: '',
      posts: [],
      doggos:[],
    };

  componentDidMount() {
    this.setState({posts: dummyData});

    fetch('https://dog.ceo/api/breed/malinois/images')
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message }))
      .catch(err => console.log('noooo'));
  }

  formHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (

      <div className="App">
        
        <SearchBar
          onChange={this.formHandler}
          search={this.state.search}
          />

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
