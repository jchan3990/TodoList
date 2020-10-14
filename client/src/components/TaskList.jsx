import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ taskList, removeTask }) => {

  const onRemoveTask = idx => {
    removeTask(idx);
  }

  return (
    <ul className="tasks">
      {taskList.map((task, idx) => (
        <TaskItem key={idx} idx={idx} task={task} removeTask={onRemoveTask} />
      ))}
    </ul>
  )
};

export default TaskList;