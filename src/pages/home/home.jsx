
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'

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
      title: 'test'
    })
  }

  render() {
    console.log('render...')
    const { todoStore: { todolist } } = this.props
    const lists = todolist.map((todo) => {
      return (
        <View>
          <Text>{todo.title}</Text>
        </View>
      )
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
