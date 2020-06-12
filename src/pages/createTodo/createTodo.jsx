
import Taro, { Component } from '@tarojs/taro';

import { View, Text, Button, Picker } from '@tarojs/components';

import { 
  AtButton,
  AtInput,
  AtList,
  AtListItem,
  AtTag,
  AtActionSheet,
  AtActionSheetItem
} from 'taro-ui'

import Todo from '../../components/todo'

import './createTodo.scss'

// import { observer, inject } from '@tarojs/mobx'

// @inject('todoStore')
// @observer
class CreateTodo extends Component {

  config = {
    navigationBarTitleText: '创建一个新的 TODO',
    enablePullDownRefresh: true
  }

  constructor (props) {
    super(props)

    this.setState({
      frequency: ['一次','工作日','周末','每天'],
      typetags: ['工作','兴趣','家庭'],
      todo: {}
    })
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

  createNewTodo() {

  }

  selectFrequencyTag = (f, e) => {
    const { todo } = this.state
    todo.frequency = f
    this.setState({
      todo: {...todo}
    })
  }

  selectTypeTag = (f, e) => {
    const { todo } = this.state
    todo.typstag = f
    this.setState({
      todo: {...todo}
    })
  }

  render() {
    const { todo } = this.state
    const { frequency } = this.state
    const frequencyUI = frequency.map((f, index) => {
      return (
        <AtTag 
          key={index}
          name={f}
          size='small' 
          active={f === todo.frequency} 
          onClick={this.selectFrequencyTag.bind(this, f)}
        >
          {f}
        </AtTag>
      )
    })

    const { typetags } = this.state
    const typetagsUI = typetags.map((f, index) => {
      return (
        <AtTag 
          key={index}
          name={f}
          size='small' 
          active={f === todo.typstag} 
          onClick={this.selectTypeTag.bind(this, f)}
        >
          {f}
        </AtTag>
      )
    })

    return (
      <View>
        <AtInput
          title='标题'
          maxLength={14}
          placeholder='最多14个汉字'
        ></AtInput>
        <Picker mode='time'>
          <AtList>
            <AtListItem title='dead line' extraText='12:01'></AtListItem>
          </AtList>
        </Picker>
        <View className='tagslist'>
          <Text className='tag_title'>频率</Text>
          { frequencyUI }
        </View>
        <View className='tagslist'>
          <Text className='tag_title'>标签</Text>
          { typetagsUI }
        </View>
        <Picker mode='selector' range={['一次性','工作日','周末','每天']}>
          <AtList>
            <AtListItem title='重复模式' extraText='每天'></AtListItem>
          </AtList>
        </Picker>
        <View>
          <AtActionSheet title='选择频率'>
            <AtActionSheetItem>
              一次性
            </AtActionSheetItem>
            <AtActionSheetItem>
              工作日
            </AtActionSheetItem>
            <AtActionSheetItem>
              周末
            </AtActionSheetItem>
            <AtActionSheetItem>
              每天
            </AtActionSheetItem>
          </AtActionSheet>
        </View>
        <AtButton 
          type='primary'
          size='small'
          onClick={this.createNewTodo}
        >创建
        </AtButton>
      </View>
    );
  }
}
export default CreateTodo; 
