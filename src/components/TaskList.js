import Task from "./Task.js";

const TaskList = ({ tasks, onDelete }) => {
  // return task list or message if no task
  return tasks.length > 0 ? (
    <ul>
      {tasks.map(task =>
      (
        <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        />
      ))}
    </ul>
  ) : <h3>You have no tasks!</h3>
}

export default TaskList
