import React from 'react';

const task = (props) => {
  return (
    <div>
      {props.task.title} / {props.task.date.getDate()} / {String(props.task.completed)}
    </div>
  );
};

export default task;
