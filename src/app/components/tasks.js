import React from 'react';

import Task from './task';

const tasks = (props) => {
  // Add key
  return props.tasks.map((task, index) => {
    return (
      <div>
        <Task task={task} />
        <button onClick={() => props.toggleTask(1)}>Del</button>
      </div>
    )
  });
};

export default tasks;
