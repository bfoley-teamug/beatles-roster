import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBeatle } from '../actions/index';
import { bindActionCreators } from 'redux';

class BeatlesList extends Component {
  renderList(){
    return this.props.beatles.map((beatle) => {
      return(
        <li
          key={beatle.name}
          onClick={() => this.props.selectBeatle(beatle)}
          className="list-group-item">
          {beatle.name}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    beatles: state.beatles
  }
}

//actions
//anything returned from this function will end up as props on the BeatlesList container
function mapDispatchToProps(dispatch) {
  //when selectBeatle is called, it goes through reducers
  return bindActionCreators({ selectBeatle: selectBeatle }, dispatch);
}

//turns BeatlesList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BeatlesList);
