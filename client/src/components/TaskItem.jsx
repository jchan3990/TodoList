import React, { useState } from 'react';

const TaskItem = ({ task }) => {

  return (
    <div>
      <span className="task">{task.task}</span>
    </div>
  )
};

export default TaskItem;