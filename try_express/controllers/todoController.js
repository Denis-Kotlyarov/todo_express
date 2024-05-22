'use strict'

const Todo = require('../models/todo');
const getAllTodos = async (req, res) => {
    const todos = await Todo.getAllTodos();
    res.json(todos)
}

const store = async (req, res) => {
    const todo = new Todo(req.body.title, req.body.body);
    await todo.saveTodo();
    res.status(201).json(todo)
}

const updateTodo = async (req, res) => {
    const todo = await Todo.updateTodo(req.params.id, req.body);
    await todo.saveTodo();
    res.status(201).json(todo)
}

const deleteTodo = async (req, res) => {
    await Todo.deleteTodo(req.params.id);
    res.status(204).send();
}

module.exports = { getAllTodos, store, updateTodo, deleteTodo }