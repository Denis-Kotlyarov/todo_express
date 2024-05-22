'use strict'

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Todo {
    constructor(title, body) {
        this.id = uuidv4();
        this.title = title;
        this.body = body;
        this.done = false;
    }

    static getAllTodos() {
        return new Promise((res, rej) => {
            fs.readFile(path.join(__dirname, '..', 'db', 'todos.json'), 'utf-8', (err, data) => {
                if (err) {
                    rej(err);
                } else {
                    res(JSON.parse(data));
                }
            })
        })
    }

    async saveTodo() {
        const todos = await Todo.getAllTodos();
        todos.push({
            id: uuidv4(),
            title: this.title,
            body: this.body,
            done: false
        })

        return new Promise((res, rej) => {
            fs.writeFile(path.join(__dirname, '..', 'db', 'todos.json'), JSON.stringify(todos), (err, data) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            })
        })
    }

    static async updateTodo(id, data) {
        const todos = await Todo.getAllTodos();
        const index = todos.findIndex((t) => t.id === id);
        const updatedCourse = {
            id: id,
            title: data.title,
            body: data.body,
            done: data.done,
        }
        todos[index] = updatedCourse;

        new Promise((res, rej) => {
            fs.writeFile(path.join(__dirname, '..', 'db', 'todos.json'), JSON.stringify(todos), (err, data) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            })
        })

        return updatedCourse;
    }

    static async deleteTodo(id) {
        const todos = await Todo.getAllTodos();
        const index = todos.findIndex((t) => t.id == id);
        todos.splice(index, 1);
        new Promise((res, rej) => {
            fs.writeFile(path.join(__dirname, '..', 'db', 'todos.json'), JSON.stringify(todos), (err, data) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            })
        })
    }
}

module.exports = Todo