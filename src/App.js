import './App.css';
import { useState } from 'react'
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';

const data = [
  {
  id: 1,
  title: "Learn React",
  date: "Feb 2",
  done: true,
  reminder: false
  },
  {
  id: 2,
  title: "Build To-do App",
  date: "Feb 3",
  done: false,
  reminder: false
  },
  {
  id: 3,
  title: "Build Fullstack App",
  date: "Feb 7",
  done: false,
  reminder: true
  }
]

// next:
// delete task (remove from array)
  // onClick, handleClick(), pass as prop to Task
// optional message if no task
// toggle reminder
// task form, form input state

function App() {
  const [tasks, setTasks] = useState(data) // tasks = global state

  // delete task
  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter(task => task.id !== id))
  }

  const taskListComp = (
    <TaskList
      tasks={tasks}
      onDelete={deleteTask}
    />
  )
  const message = <h3>You have no tasks!</h3>

  return (
    <div className="container">
      <Header />
      {/* render taskList or message if empty */}
      {tasks.length > 0 ? taskListComp : message}
    </div>
  );
}

export default App;
