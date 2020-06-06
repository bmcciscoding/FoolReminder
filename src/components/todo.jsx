
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './todo.css'

class Todo  extends Component {
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

  changeName() {
    console.log('father') 
    const { todo } = this.props
    todo.title = 'xx ! xx'
  }

  render() {
    const { todo } = this.props
    console.log(this.props)
    return (
      <View className='todo'>
        <Text>{ todo.title }</Text>
        <Button onClick={() => { this.props.onChange(todo) }}>change</Button>
      </View>
    );
  }
}
export default Todo;
