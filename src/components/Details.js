import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const { currentTrack } = this.props;
    if (currentTrack && currentTrack.playing) {
      const artistStr = currentTrack.artists.join(', ');
      return (
        <div className='details-container'>
          <h1>You're listening to:</h1>
          <p className='marquee'>"{currentTrack.track}" by {artistStr}</p>
        </div>
      );
    } else {
      return (
        <div className='details-container'>
          <h1>Nothing playing</h1>
          <p className='marquee'></p>
        </div>
      );
    };
  };
};

const mapStateToProps = (state) => {
  return {
    currentTrack: state.currentTrack
  };
};

export default connect(mapStateToProps)(Details);
