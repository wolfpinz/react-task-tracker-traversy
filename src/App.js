import './App.css';
import { useState } from 'react'
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';
import AddTaskForm from './components/AddTaskForm.js';

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
  const [form, setForm] = useState(false)

  // delete task
  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter(task => task.id !== id))
  }
  // toggle reminder
  const toggleReminder = (taskID) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskID) {
        return {...task, reminder: !task.reminder}
      } else {
        return task
      }
    }))
  }
  // render/toggle form
  const toggleForm = () => {
    setForm(!form)
  }
  const addTask = (taskInput, dateInput, checkInput) => {
    // set next ID
    const lastTask = tasks.at(-1)
    const nextID = lastTask.id + 1
    // set Task
    setTasks([...tasks, {
      id: nextID,
      title: taskInput,
      date: dateInput,
      reminder: checkInput
    }])
    // hide
    toggleForm();
  }

  // return values
  const taskListComp = (
    <TaskList
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
    />
  )

  return (
    <div className="container">
      <Header
        onAdd={toggleForm}
        formState={form}
      />
      {/* render form after click on Add */}
      {form && <AddTaskForm onSave={addTask}/>}
      {/* render taskList or message if empty */}
      {tasks.length > 0 ? taskListComp : <h3>You have no tasks!</h3>}
    </div>
  );
}

export default App;
