
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Icon, Checkbox, CheckboxGroup, Image } from '@tarojs/components';
import { AtCheckbox, AtSwipeAction } from 'taro-ui'

import TodoSelectBox  from './todo-select-box/todo-select-box'

import './todo.scss'

class Todo  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClose: false,
      showSelectRepeat: false,
      repeat_contents: ['一次','工作日','周末','每天'],

      showSelectEmotions: false,
      emotion_contents: ['😁','🙁','😡','😷']
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

  showRepeat() {
    this.setState({
      showSelectRepeat: !this.state.showSelectRepeat
    })
  }

  showEmotion() {
    this.setState({
      showSelectEmotions: !this.state.showSelectEmotions
    })
  }

  changeRepeat(index) {
    const { todo } = this.props
    const { repeat_contents } =  this.state
    todo.repeat = repeat_contents[index]
    this.props.onUpdate(todo)
  }

  changeEmotion(index) {
    const { todo } = this.props
    const { emotion_contents } =  this.state
    todo.emotion = emotion_contents[index]
    this.props.onUpdate(todo)
  }

  render() {
    const { todo } = this.props
    if (todo == undefined) {
      return (
        <View>error</View>
      )
    }

    const { 
      isClose, 
      showSelectRepeat, 
      repeat_contents, 
      showSelectEmotions,
      emotion_contents
    } =  this.state

    let closeUI = isClose ? (
      <View className='extra-box'>
        <Text className='repeat' onClick={this.showRepeat}>{todo.repeat}</Text>
        <Text className='emotion' onClick={this.showEmotion}>{todo.emotion}</Text>
        <Text className='weather'>⛅️</Text>
        <Text onClick={this.props.onDelete} className='delete'>🚮</Text>
      </View>
    ) : null

    const actions = [
      {
        text: '取消',
        style: {
          backgroundColor: '#6190E8'
        }
      },
      {
        text: '确认',
        style: {
          backgroundColor: '#FF4949'
        }
      }
    ]

    return (
      <View>
        <View className='todo'>
          <AtSwipeAction options={actions}>
            <View className={`content ${todo.isComplete ? 'complete' : 'ready'}`}>
              <Image className={`checkbox ${todo.isComplete ? 'checked' : 'unchecked'}`} onClick={this.props.onComplete}></Image>
              <Text className={`title ${todo.isComplete ? 'title_complete' : 'title_uncomplete'}`}>{todo.title}</Text>
              {/* <Text className='date'>{`${todo.createDate.getMonth() + 1}-${todo.createDate.getDate()}`}</Text> */}
              {/* <Text>{todo.createDate.getTime()}</Text> */}
              <Text onClick={this.open}>{isClose ? '⬇️' : '⬆️'}</Text>
            </View>
          </AtSwipeAction>
          { closeUI }
          { showSelectRepeat 
          ? (<TodoSelectBox contents={repeat_contents} onSelectIndex={this.changeRepeat.bind(this)} />) 
          : null }
          { showSelectEmotions 
          ? (<TodoSelectBox contents={emotion_contents} onSelectIndex={this.changeEmotion.bind(this)} />) 
          : null }
        </View>
      </View>

    );
  }
}
export default Todo;
