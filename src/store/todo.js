import { observable } from 'mobx'

const todoStore = observable({

  todolist: [{
    title: '看电影abjxxxgll',
    isComplete: false,
    createDate: new Date()
  }],

  addTodo(todo) {
    todo.createDate = new Date()
    this.todolist = [todo, ...this.todolist]
  },

  update(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    this.todolist = [...this.todolist, todo]
  }
})

export default todoStore


