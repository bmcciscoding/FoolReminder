
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

  show() {
    console.log('xxxxx')
  }

  render() {
    const { todo } = this.props
    return (
      <View className={`todo ${todo.isComplete ? 'complete' : 'ready'}`}>
        <View className='checkbox' onClick={this.show}>

        </View>
        {/* <Text>{`${todo.date.getMonth()} ${todo.date.getDay()}`}</Text> */}
        <CheckboxGroup onChange={this.props.onComplete}>
          <Checkbox value={todo.isComplete} checked={todo.isComplete}>{todo.title}</Checkbox>
        </CheckboxGroup>
      </View>
    );
  }
}
export default Todo;
