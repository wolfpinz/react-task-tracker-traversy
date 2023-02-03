import { useState } from 'react'

const AddTaskForm = ({ onSave }) => {
  const [taskInput, setTaskInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  const [checkInput, setCheckInput] = useState(false)


  const handleTaskInput = (e) => {
    setTaskInput(e.target.value)
  }
  const handleDateInput = (e) => {
    setDateInput(e.target.value)
  }
  const handleCheck = () => {
    setCheckInput(!checkInput)
  }
  // const saveTask = (e) => {
  //   e.preventDefault

  // }

  return (
    <form className='add-form'
      onSubmit={e => {
        e.preventDefault()
        console.log(taskInput, dateInput, checkInput)
        onSave(taskInput, dateInput, checkInput)
      }}
    >
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Add Task" onChange={handleTaskInput} />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input type="text" placeholder="Add a date" onChange={handleDateInput} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type="checkbox" checked={checkInput} onChange={handleCheck} />
      </div>
      <input
        type="submit" value="Save Task" className='btn btn-block' />
    </form>
  )
}


export default AddTaskForm
