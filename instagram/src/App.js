import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';

import LoginPage from './components/LoginPage/LoginPage';
import PostContainer from './components/PostContainer/PostContainer';
import NavBar from './components/NavBar/NavBar';
import dummyData from './dummy-data';

const mainTheme = {
  background: 'palevioletred',
  borderRadius: '0 0 0 4px',
  borderRadiusAlt: '0 4px 0 0',
  boxShadow: '4px 6px black',
  color: 'papayawhip',
  elementBorder: '1px solid black',
  icoHover: 'black',
  lineHeight: '1.75',
  margin: '12px 8px',
  maxWidth: '640px',
  textShadow: '1px 2px black',
};

const AppWrapper = styled.div`
  align-items: center;
  background: papayawhip;
  /* border:1px solid red; */
  color: papayawhip;
  display: flex;
  flex-direction: column;
  font-family: 'Source Code Pro', monospace;
  justify-content: center;
  margin: 0 auto;
  max-width:80%;
`;

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
      <AppWrapper>
        {/* if user is logged in, return the app, otherwise return login page */}
        {localStorage.getItem('user') ?
          <>
          <ThemeProvider theme={mainTheme}>
            <NavBar
              logOut={this.logOut}
              myName={this.state.myName}
              onChange={this.searchHandler}
              onMouseOver={this.onMouseOver}
              />
              </ThemeProvider>

              <ThemeProvider theme={mainTheme}>
            <PostContainer
              myName={this.state.myName}
              posts={
                this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
              } />
              </ThemeProvider>
          </>
          : <ThemeProvider theme={mainTheme}>
          <LoginPage
            logIn={this.logIn}
            onChange={this.changeHandler}
            value={this.state.myName}
          /></ThemeProvider>}
      </AppWrapper>
    );
  }
}
export default App;
