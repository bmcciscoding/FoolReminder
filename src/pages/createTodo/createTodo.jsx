
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

  render() {
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
          <Text className='tag_title'>标签</Text>
          <AtTag size='small' circle='true'>工作</AtTag>
          <AtTag size='small' circle='true'>家庭</AtTag>
          <AtTag size='small' circle='true'>项目</AtTag>
          <AtTag size='small' circle='true'>兴趣</AtTag>
        </View>
        <View className='tagslist'>
          <Text className='tag_title'>频率</Text>
          <AtTag size='small' circle='true'>一次</AtTag>
          <AtTag size='small' circle='true'>工作日</AtTag>
          <AtTag size='small' circle='true'>周末</AtTag>
          <AtTag size='small' circle='true'>每天</AtTag>
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
