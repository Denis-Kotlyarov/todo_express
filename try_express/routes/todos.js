var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todoController')
/* GET users listing. */
router.get('/', todoController.getAllTodos);
router.post('/', todoController.store);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;