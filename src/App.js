import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from './components/Player';
import Logo from './components/Logo';
import Details from './components/Details';
import { postRenewAccess, getCurrentTrack } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { token, postRenewAccess, getCurrentTrack } = this.props;
    if (!token) {
      postRenewAccess(getCurrentTrack);
    } else {
      getCurrentTrack(token);
    };
    setInterval(() => {
      getCurrentTrack(token);
    }, 10000);
  };
  render() {
    const { currentTrack } = this.props;
    if (currentTrack && currentTrack.playing) {
      return (
        <div className="app-container">
          <Player>
            <Logo />
            <Details />
          </Player>
        </div>
      );
    } else {
      return (
        <div className="app-container">
        </div>
      );
    };
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.access.token,
    currentTrack: state.currentTrack
  };
};

export default connect(mapStateToProps, { postRenewAccess, getCurrentTrack })(App);
