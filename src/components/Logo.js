import React, { Component } from 'react';

import logo from '../images/logo.png';

class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={logo} alt='Spotify logo' />
      </div>
    );
  };
};

export default Logo;
