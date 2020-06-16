import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './oneday.scss'

class OneDay extends Component {

  config = {
    navigationBarTitleText: '一天'
  }

  constructor (props) {
    super(props)

    const tasks = Array(24).fill(1)
    this.setState({
        tasks: tasks
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidShow () { }

  componentDidHide () { }
  
  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {

    const { tasks } = this.state

    const tasksui = tasks.map((task) => {
      return (
        <View key={task.name}>{task}</View>
      )
    })
      
    return (
      <View className='index'>
        { tasksui }
      </View>
    )
  }
}

export default OneDay 
