
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, MovableArea, MovableView } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'
import { AtFab } from 'taro-ui'
import Todo from '../../components/todo'

@inject('todoStore')
@observer
class Home extends Component {

  config = {
    navigationBarTitleText: 'Home',
    enablePullDownRefresh: true
  }

  constructor (props) {
    super(props)
    this.props.todoStore.load()
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

  deleteTodo(todo) {
    this.props.todoStore.delete(todo)
  }

  onPullDownRefresh() {
    Taro.navigateTo({
      url: '/pages/createTodo/createTodo',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  }

  onUserTouch = (e) => {
    console.log(e)
  }

  render() {
    const { todoStore: { todolist } } = this.props
    const lists = todolist.map((todo) => {
      return (<Todo 
        key={todo.title} 
        todo={todo} 
        onComplete={this.completeTodo.bind(this, todo)}
        onDelete={this.deleteTodo.bind(this, todo)}
      />)
    })
    return (
      <View>
        { lists }
      </View>
    );
  }
}
export default Home; 
