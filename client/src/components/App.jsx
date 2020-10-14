import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    let list = [...taskList];
    list.push({
      'task': task,
      'completed': false,
    });
    setTaskList(list);
  }

  return (
    <div>
      <h1 id="title">Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList taskList={taskList} />
    </div>
  )
};

export default App;