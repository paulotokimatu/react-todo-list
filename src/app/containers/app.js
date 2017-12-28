import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import '../../styles.scss';

import Cockpit from '../components/cockpit';
import Tasks from '../components/tasks';
import * as actionTypes from '../store/actions';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Cockpit addTask={this.props.onAddTask} />
        <Tasks tasks={this.props.tasks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAddTask: () => dispatch({type: actionTypes.ADD_TASK}),
      onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_TASK})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
