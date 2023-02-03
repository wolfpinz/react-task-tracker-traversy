import Task from "./Task.js";

const TaskList = ({ tasks }) => {

  return (
    <ul>
      {tasks.map(task =>
      (
        <Task
        key={task.id}
        task={task}
        />
      ))}
    </ul>
  )
}

export default TaskList
