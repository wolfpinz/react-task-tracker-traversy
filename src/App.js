import './App.css';
import { useState } from 'react'
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';

// components: Task, TaskList, Button
// data
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

function App() {
  const [tasks, setTasks] = useState(data) // tasks = global state

  return (
    <div className="container">
      <Header />
      <TaskList tasks={tasks}/>             {/* pass tasks (state) as prop */}
    </div>
  );
}

export default App;
