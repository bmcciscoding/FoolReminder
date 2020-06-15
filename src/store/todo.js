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
              that.todolist = [d.data, ...that.todolist]
            } 
          })
        }
      }
    })
  },

  addTodo(todo) {
    todo.createDate = new Date()
    todo.id = todo.createDate.getTime()
    Taro.setStorage({
      key: todo.id,
      data: todo,
      fail: function(res) {
        console.log('set fail', res)
      },
      success: function(res) {
        // 
      }
    })
    this.todolist = [todo, ...this.todolist]
  },

  update(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    this.todolist = [...this.todolist, todo]
  },

  delete(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    try {
      Taro.removeStorageSync(todo.id)
      console.log('delete', todo.id)
      this.todolist = [...this.todolist]
    } catch (e) {
      // Do something when catch error
    }
  }
})

export default todoStore


