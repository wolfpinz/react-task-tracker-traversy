// import PropTypes from 'prop-types'

const Task = ({ task }) => {
  return (
      <li className="task">
        <h3>{task.title}</h3>
        <p>{task.date}</p>
      </li>
  )
}

// Task.propTypes = {

// }

export default Task
