import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log("effect")
    fetchData();
  }, [])
 
  const fetchData = () => {
    fetch('http://localhost:3000/todos')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      setTodos(data.todos);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  return (
    <div>
      <CreateTodo fetchData={fetchData} />
      <Todos todos={todos} fetchData={fetchData} />
    </div>
  )
}

export default App
