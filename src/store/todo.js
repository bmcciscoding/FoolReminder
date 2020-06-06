import { observable } from 'mobx'

const todoStore = observable({
  
  todolist: [{
    title: 'xxx',
  }],

  addTodo(todo) {
    this.todolist = this.todolist.concat([todo])
    console.log(this.todolist.length)
  },

  changeTodoTitle(todo, newTitle) {
    todo.title = newTitle
    this.todolist = [...this.todolist]
  }
})

export default todoStore