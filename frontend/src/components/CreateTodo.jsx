/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from 'axios';

export function CreateTodo({fetchData}) {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   function handleSubmit() {
      axios.post('http://localhost:3000/todos', {
         title,
         description
       })
       .then(function (response) {
         fetchData();
         setTitle("");
         setDescription("");
         console.log("done");
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
   }

  return (
    <div>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
      <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
