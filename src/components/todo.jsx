
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Icon, Checkbox, CheckboxGroup, Image } from '@tarojs/components';
import { AtCheckbox } from 'taro-ui'
import './todo.css'

import "taro-ui/dist/style/components/flex.scss";

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
      <View className={`todo ${todo.isComplete ? 'complete' : 'ready'}`}>
        <Image className={`checkbox ${todo.isComplete ? 'checked' : 'unchecked'}`} onClick={this.props.onComplete}></Image>
        <Text className={`title ${todo.isComplete ? 'title_complete' : 'title_uncomplete'}`}>{todo.title}</Text>
        <Text className='date'>{`${todo.date.getMonth() + 1}-${todo.date.getDate()}`}</Text>
      </View>
    );
  }
}
export default Todo;
