const express = require('express')
const bodyParser = require('body-parser')
const toDoItem = require('./models/toDoItem')
const toDoController = require('./controllers/toDoController')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

// ?, :params ==> GET req.query => ?, req.params => .(url params)
// post ==> body

// For point 2, use query params
app.get('/todos', toDoController.getTodos)
app.get('/todos/incomplete', toDoController.getIncompleteTodos)
app.get('/todos/:title', toDoController.getTodoByTitle)
app.get('/todos/priority-filter/:startPriority/:endPriority', toDoController.getTodosByPriorityRange)
app.get('/todos/date-range-filter/:startDay/:startMonth/:startYear/:endDay/:endMonth/:endYear', toDoController.getTodosByDateRange)
app.get('/todos/top-priority/:limit', toDoController.getTodosByPriority)
app.patch('/todos/:title/mark-complete', toDoController.markTodoAsComplete)
app.post('/todos', toDoController.createTodo)
app.delete('/todos/:title',toDoController.deleteTodosbytitle)
// Point 3, prioritize the todos, show incompleted todos before the completed todos

// Get ko by id krna hai

// Assumption: Priority larger the no, higher the priority

module.exports = app