import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <div>
      <CreateTodo />
      <Todos todos={[
        {
          title: "go gym",
          description: "go to gym noww",
          completed: false
        },
        {
          title: "go gym again",
          description: "go to gym noww",
          completed: true
        }
      ]} />
    </div>
  )
}

export default App
