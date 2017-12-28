import React, { Component } from 'react';

export default class Cockpit extends Component {
  inputTaskChanged = (e) => {
    if (e.target.value !== '' && e.key === 'Enter') {
      this.props.addTask(e.target.value, false, new Date());
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          placeholder="New task"
          onKeyUp={this.inputTaskChanged}
        />
      </div>
    )
  }
};
