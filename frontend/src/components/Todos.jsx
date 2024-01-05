/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { Todo } from "./Todo";

export function Todos({ todos }) {
  // const [todos, setTodos] = useState([]);
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1> 
            <h1>{todo.description}</h1>
            <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
}
