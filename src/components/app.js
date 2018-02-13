import React from 'react';
import { Component } from 'react';

import BeatlesList from '../containers/beatles-list';
import BeatleDetail from '../containers/beatle-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BeatlesList />
        <BeatleDetail />
      </div>
    );
  }
}
