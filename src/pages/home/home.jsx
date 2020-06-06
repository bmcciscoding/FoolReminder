
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'
import './home.css'
import Todo from '../../components/todo'

@inject('todoStore')
@observer
class Home extends Component {

  config = {
    navigationBarTitleText: 'Home'
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

  changeTodo(todo) {
    const { todoStore } = this.props
    todoStore.changeTodoTitle(todo, `${todo.title} + 1`)
  }

  completeTodo(todo) {
    this.props.todoStore.complete(todo)
  }

  render() {
    const { todoStore: { todolist } } = this.props
    const lists = todolist.map((todo) => {
      return (<Todo 
        key={todo.title} 
        todo={todo} 
        onComplete={this.completeTodo.bind(this, todo)}
        onChange={this.changeTodo.bind(this, todo)}
      />)
    })
    return (
      <View>
        <Text>Home</Text>
        <Button onClick={this.add}>ADD</Button>
        { lists }
      </View>
    );
  }
}
export default Home; 
