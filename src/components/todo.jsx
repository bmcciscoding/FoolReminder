
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Icon, Checkbox, CheckboxGroup } from '@tarojs/components';
import { AtCheckbox } from 'taro-ui'
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

  render() {
    const { todo } = this.props
    return (
      <View className={todo.isComplete ? 'completeTodo' : 'todo'}>
      <CheckboxGroup onChange={this.props.onComplete}>
        <Checkbox value={todo.isComplete} checked={todo.isComplete}>{todo.title}</Checkbox>
      </CheckboxGroup>

        <Button></Button>
        <Button onClick={this.props.onChange}>change</Button>
      </View>
    );
  }
}
export default Todo;
