const mongoose=require("mongoose");
const { boolean } = require("zod");

// mongoose.connect(""); add connection string /todos

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoschema);

module.exports ={
    todo
}