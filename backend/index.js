require('dotenv').config();
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const Todo = require('./db');
const app = express();


const PORT = 3000;

// middlewares
app.use(express.json());

// routes
app.get('/', function(req, res) {
   res.send("Hi there");
})

app.get('/todos', async function(req, res) {
   const todosPayload = await Todo.find({});
   res.status(200).json({
      success: true,
      todos: todosPayload
   })
})

app.post('/todos', async function(req, res) {
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);   
   if(!parsedPayload.success){
      res.status(411).json({
         success: false,
         msg: "Invalid inputs"
      })
   }
   // add in mongodb
   await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
   })

   res.status(200).json({
      success: true,
      msg: "Todo created successfully"
   })
})

app.put('/completed', async function(req, res) {
   const updatePayload = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayload);
   if(!parsedPayload.success){
      res.status(411).json({
         success: false,
         msg: "Invalid id"
      })
   }
   // // update todo
   // const todo = await Todo.findById("65970500807269f2afe41a12");
   // console.log(todo);
   await Todo.findByIdAndUpdate({_id: updatePayload.id}, {
      completed: true
   })

   res.status(200).json({
      success: true,
      msg: "Todo marked as completed"
   })
})

// server call
app.listen(PORT, function(){
   console.log(`port running on ${PORT}`);
})