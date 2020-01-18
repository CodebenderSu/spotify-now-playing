import React, { Component } from 'react';

class Player extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='player-container'>
        {children}
      </div>
    );
  };
};

export default Player;
