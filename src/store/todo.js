import { observable } from 'mobx'

import Taro from '@tarojs/taro'

const todoStore = observable({

  todolist: [],

  load() {
    let that = this
    Taro.getStorageInfo({
      success: function(res) {
        for (let i=0; i<res.keys.length; i++) {
          const k = res.keys[i]
          Taro.getStorage({
            key: k,
            success: function(d) {
              console.log('get success', d.data)
              that.todolist = [d.data, ...that.todolist]
              // this.todolist = [d.data, ...this.todolist]
            } 
          })
        }
      }
    })
  },

  addTodo(todo) {
    todo.createDate = new Date()
    Taro.setStorage({
      key: `${todo.createDate.getTime()}`,
      data: todo,
      fail: function(res) {
        console.log('set fail', res)
      },
      success: function(res) {
        console.log('set success', res)
      }
    })
    this.todolist = [todo, ...this.todolist]
  },

  update(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    this.todolist = [...this.todolist, todo]
  }
})

export default todoStore


