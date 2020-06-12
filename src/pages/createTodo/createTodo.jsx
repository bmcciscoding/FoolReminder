
import Taro, { Component } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx'

import { 
  View, 
  Text, 
  Button, 
  Picker, 
  Input 
} from '@tarojs/components';

import { 
  AtButton,
  AtInput,
  AtList,
  AtListItem,
  AtTag,
  AtActionSheet,
  AtActionSheetItem,
} from 'taro-ui'

import Todo from '../../components/todo'

import './createTodo.scss'

// import { observer, inject } from '@tarojs/mobx'

@inject('todoStore')
@observer
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

  createNewTodo() {
    const { todo } = this.state
    if (!todo.title) {
      Taro.showToast({
        title: '请填写标题',
        icon: 'none',
        duration: 1500
      })
    } else {
      this.props.todoStore.addTodo(todo)
      Taro.navigateBack({
        delta: 2
      })
    }
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
    todo.type_tag = f
    this.setState({
      todo: {...todo}
    })
  }

  selectTime = (e) => {
    const { todo } = this.state
    todo.deadline = e.timeStamp
    this.setState({
      todo: {...todo}
    })
  }

  changeTitle = (e) => {
    const { todo } = this.state
    todo.title = e
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
          className='select_tag'
          key={index}
          type='primary'
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
    const typetagsUI = typetags.map((f) => {
      return (
        <AtTag 
          className='select_tag'
          key={f}
          name={f}
          type='primary'
          size='small'
          circle
          active={f === todo.type_tag} 
          onClick={this.selectTypeTag.bind(this, f)}
        >
        {f}
      </AtTag>
        // <View key={f} className='tag'>

        // </View>
        
      )
    })

    return (
      <View>
        <AtInput
          title='标题'
          maxLength={28}
          placeholder='最多28个汉字'
          onChange={this.changeTitle.bind(this)}
        ></AtInput>        
        <Picker mode='time' onChange={this.selectTime}>
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
          <View>
          { typetagsUI }
          </View>
        </View>
        <Picker 
          mode='selector' 
          range={['一次性','工作日','周末','每天']}
        >
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
          onClick={this.createNewTodo.bind(this)}
        >创建
        </AtButton>
      </View>
    );
  }
}
export default CreateTodo; 
