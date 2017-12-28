/* global document */
import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import '../styles.scss';

import Cockpit from './components/cockpit';
import Tasks from './components/tasks';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { title: 'Foobar', completed: false, date: new Date() },
        { title: 'Lorem', completed: true, date: new Date() },
        { title: 'BobAlice', completed: false, date: new Date() },
      ]
    };
  }

  render() {
    return (
      <div>
        <Cockpit />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
