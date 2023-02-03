// import PropTypes from 'prop-types'
import { MdDeleteOutline } from "react-icons/md";

const Task = ({ task, onDelete }) => {
  return (
      <li className="task">
        <div>
          <h3>{task.title}</h3>
          <p>{task.date}</p>
        </div>
        <MdDeleteOutline
        onClick={() => onDelete(task.id)} // does not work with just {onDelete(task.id)} => calling the function => need to wrap in function to be called on click
        style={{color: "darkred", marginTop: "5px"}}
        label="delete"
        size="18px"/>
      </li>
  )
}

// Task.propTypes = {

// }

export default Task
