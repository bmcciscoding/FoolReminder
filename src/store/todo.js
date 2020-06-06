import { observable } from 'mobx'

const todoStore = observable({

  todolist: [{
    title: 'xxx',
    isComplete: false,
    date: Date()
  }],

  addTodo(todo) {
    todo.date = Date()
    this.todolist = this.todolist.concat([todo])
    console.log(this.todolist.length)
  },

  changeTodoTitle(todo, newTitle) {
    todo.title = newTitle
    this.todolist = [...this.todolist]
  },

  complete(todo) {
    todo.isComplete = !todo.isComplete
    console.log('complete', todo)
    this.todolist = [...this.todolist]
  }
})

export default todoStore


