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
        <Tasks tasks={this.props.tasks} removeTask={this.props.onRemoveTask} toggleTask={this.props.onToggleTask}/>
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
    onAddTask: (title, completed, currentDate) => dispatch({
      type: actionTypes.ADD_TASK,
      payload: {
        title: title,
        completed: completed,
        date: currentDate
      }
    }),
    onRemoveTask: (index) => dispatch({
      type: actionTypes.REMOVE_TASK,
      payload: {index: index}
    }),
    onToggleTask: (index) => dispatch({
      type: actionTypes.TOGGLE_TASK,
      payload: {index: index}
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
