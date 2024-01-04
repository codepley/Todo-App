const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
   console.log('DB Connected!!!');
})
.catch(err => {
   console.log("DB Error", err);
})

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: Boolean
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo;
