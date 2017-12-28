import React from 'react';

const tasks = (props) => {
  return props.tasks.map((task, index) => {
    return task.title;
  });
};

export default tasks;
