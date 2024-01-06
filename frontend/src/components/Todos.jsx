/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { Todo } from "./Todo";

import axios from "axios";

export function Todos({ todos, fetchData }) {
   
  function markComplete(id) {

    axios.put('http://localhost:3000/completed', {id: id})
    .then(function(response) {
      console.log(response)
      fetchData();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => markComplete(todo._id)}>
              {todo.completed ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
