import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ taskList }) => {
  return (
    <ul className="tasks">
      {taskList.map((task, idx) => (
        <TaskItem key={idx} task={task} />
      ))}
    </ul>
  )
};

export default TaskList;