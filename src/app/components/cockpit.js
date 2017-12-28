import React, { Component } from 'react';

export default class Cockpit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTask: ''
    };
  }

  inputTaskChanged = (e) => {
    if (e.target.value !== '' && e.key === 'Enter') {
      this.setState({inputTask: e.target.value});
      e.target.value = '';

      return;
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
