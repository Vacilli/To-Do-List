import Task from './Task'

export default function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} setTasks={setTasks} />
        </li>
      ))}
    </ul>
  )
}
