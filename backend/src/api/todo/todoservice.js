const Todo = require('./todo')

Todo.methods(['delete', 'post', 'put', 'get'])
Todo.updateOptions({new: true, runValidators: true})


module.exports = Todo