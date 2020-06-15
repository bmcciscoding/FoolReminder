import { observable } from 'mobx'

import Taro from '@tarojs/taro'

const todoStore = observable({

  todolist: [],

  load() {

  },

  addTodo(todo) {
    todo.createDate = new Date()
    todo.id = todo.createDate.getTime()
    todo.emotion = '😀'
    todo.repeat = '一次'
    Taro.setStorage({
      key: todo.id.toString(),
      data: todo,
      fail: function(res) {
        console.log('set fail', res)
      },
      success: function(res) {
        console.log('set', todo.id)
      }
    })
    this.todolist = [todo, ...this.todolist]
  },

  update(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    this.todolist = [...this.todolist, todo]
    Taro.setStorage({
      key: todo.id.toString(),
      data: todo,
      fail: function(res) {
        console.log('set fail', res)
      },
      success: function(res) {
        console.log('set', todo.id)
      }
    })
  },

  delete(todo) {
    const idx = this.todolist.indexOf(todo)
    this.todolist.splice(idx, 1)
    try {
      Taro.removeStorageSync(todo.id.toString())
      this.todolist = [...this.todolist]
    } catch (e) {
      console.log('delete err', e)
    }
  }
})

export default todoStore


Taro.getStorageInfo({
  success: function(res) {
    for (let i=0; i<res.keys.length; i++) {
      const k = res.keys[i]
      Taro.getStorage({
        key: k,
        success: function(d) {
          todoStore.todolist.push(d.data)
          // that.todolist = [d.data, ...that.todolist]
        } 
      })
    }
  }
})


