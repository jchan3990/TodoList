import React, { useState } from 'react';

const TaskItem = ({ task, removeTask, idx }) => {
  const [completed, setCompleted] = useState(false);

  const onTaskClick = () => {
    if (!completed) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }

  const onRemoveTask = (e) => {
    removeTask(idx);
  }

  var style = {
    textDecoration: completed ? 'line-through' : 'none',
  }

  return (
    <div>
      <span style={style} className="task" onClick={onTaskClick} >{task.task + ' '}</span>
      <button className="removeBtn" onClick={onRemoveTask} >Remove</button>
    </div>
  )
};

export default TaskItem;