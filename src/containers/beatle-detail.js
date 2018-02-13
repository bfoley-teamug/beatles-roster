import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeatleDetail extends Component {
  render() {
    if(!this.props.beatle) {
      return <div>Select a Beatle to get started ... </div>
    }
    return (
      <div>
        <h3>Beatles Roster</h3>
        <div>{this.props.beatle.name}</div>
        <div>Hometown: {this.props.beatle.hometown}</div>
        <div>Born: {this.props.beatle.born}</div>
        <div>Died: {this.props.beatle.died}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beatle: state.activeBeatle

  };
}

export default connect(mapStateToProps)(BeatleDetail);
