import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    clearFields();
  }

  const clearFields = () => {
    setTask('');
    document.getElementById('taskForm').reset();
  }

  return (
    <div>
      <form id="taskForm" onSubmit={onSubmit}>
        <label> Task: {''}
          <input type="text" name="task" onChange={e => setTask(e.target.value)} />
        </label>
        <button>Add Task</button>
      </form>
    </div>
  )
};

export default TaskForm;