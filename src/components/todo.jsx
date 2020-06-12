
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Icon, Checkbox, CheckboxGroup, Image } from '@tarojs/components';
import { AtCheckbox } from 'taro-ui'
import './todo.css'

import "taro-ui/dist/style/components/flex.scss";

class Todo  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClose: false
    }
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

  open() {
    this.setState({
      isClose: !this.state.isClose
    })
  }

  render() {
    const { todo } = this.props
    
    const { isClose } =  this.state
    let closeUI = isClose ? (
      <View>
        <Text>tag work</Text>
        <Text>repeat every work</Text>
        <Text>emoji 😄</Text>
        <Text>weather ☔️</Text>
      </View>
    ) : null

    return (
      <View className={`todo ${todo.isComplete ? 'complete' : 'ready'}`}>
        <Image className={`checkbox ${todo.isComplete ? 'checked' : 'unchecked'}`} onClick={this.props.onComplete}></Image>
        <Text className={`title ${todo.isComplete ? 'title_complete' : 'title_uncomplete'}`}>{todo.title}</Text>
        <Text className='date'>{`${todo.date.getMonth() + 1}-${todo.date.getDate()}`}</Text>
        <Text onClick={this.open}>{isClose ? '⬇️' : '⬆️'}</Text>
        { closeUI }
      </View>
    );
  }
}
export default Todo;
