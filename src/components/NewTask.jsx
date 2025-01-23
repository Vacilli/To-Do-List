import { useRef } from 'react'
import PropTypes from 'prop-types'

export default function NewTask({ setTasks }) {
  const taskRef = useRef(null)
  const descriptionRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const enteredTask = taskRef.current.value
    const enteredDescription = descriptionRef.current.value

    const newTask = {
      title: enteredTask,
      description: enteredDescription,
      id: Math.random(),
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Task</label>
        <input id='name' type='text' ref={taskRef} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input id='description' type='text' ref={descriptionRef} />
      </div>
      <div>
        <button>New Task</button>
      </div>
    </form>
  )
}

NewTask.propTypes = {
  setTasks: PropTypes.func.isRequired,
}
