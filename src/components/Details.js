import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didChange: false
    };
  };
  componentDidUpdate(prevProps) {
    const { currentTrack } = this.props;
    if (currentTrack.id !== prevProps.currentTrack.id) {
      this.setState({ didChange: true });
    }
  };
  render() {
    const { currentTrack } = this.props;
    const { didChange } = this.state;
    if (currentTrack && currentTrack.playing) {
      const artistStr = currentTrack.artists.join(', ');
      if (didChange) {
        document.getElementById('marquee').style.display = 'none';
        setTimeout(() => document.getElementById('marquee').style.display = null, 10);
      };
      return (
        <div className='details-container'>
          <h1>You're listening to:</h1>
          <p id='marquee' className='marquee'>"{currentTrack.track}" by {artistStr}</p>
        </div>
      );
    } else {
      return (
        <div className='details-container'>
          <h1>Nothing playing</h1>
          <p id='marquee' className='marquee'></p>
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
