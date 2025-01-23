import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <main>
      <Header />
      <NewTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  )
}

export default App
