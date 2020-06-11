
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'

import Todo from '../../components/todo'

@inject('todoStore')
@observer
class CreateTodo extends Component {

  config = {
    navigationBarTitleText: 'CreateTodo',
    enablePullDownRefresh: true
  }

  constructor (props) {
    super(props)
  }
  state={}
  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}

  add() {
    const { todoStore } = this.props
    todoStore.addTodo({
      title: 'test',
      isComplete: false
    })
  }

  completeTodo(todo) {
    todo.isComplete = !todo.isComplete
    this.props.todoStore.update(todo)
  }

  onPullDownRefresh() {
    
  }

  render() {
    const { ani } = this.state
    console.log('ani', ani)
    const { todoStore: { todolist } } = this.props
    const lists = todolist.map((todo) => {
      return (<Todo 
        key={todo.title} 
        todo={todo} 
        onComplete={this.completeTodo.bind(this, todo)}
      />)
    })
    return (
      <View>
        <Button onClick={this.add}>ADD</Button>
        { lists }
      </View>
    );
  }
}
export default CreateTodo; 
