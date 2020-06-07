
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'
import './home.css'
import Todo from '../../components/todo'

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
      title: 'test',
      isComplete: false
    })
  }

  completeTodo(todo) {
    todo.isComplete = !todo.isComplete
    this.props.todoStore.update(todo)
  }

  sametimeAni() {
    var ani = Taro.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })

    ani
      .backgroundColor('#666666').opacity(0.5).rotate(90)
      .step()
    this.setState({
        ani: ani.export()
    });
  }

  stepToStep() {
    var ani = Taro.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })

    ani
      .backgroundColor('#666666')
      .step() 
      .rotate(45)
      .step()
      .opacity(0.5)
      .step()
    this.setState({
        ani: ani.export()
    });

    this.ani = ani
  }

  aniStart(e) {
    console.log('ani start')
  }

  aniEnd(e) {
    console.log('ani end')
  }

  render() {
    const { ani } = this.state
    console.log('ani', ani)
    const { todoStore: { todolist } } = this.props
    const lists = todolist.map((todo) => {
      return (<Todo 
        key={todo.title} 
        todo={todo} 
        onComplete={this.completeTodo.bind(this, todo)}
      />)
    })
    return (
      <View>
        <Button onClick={this.add}>ADD</Button>
        <View 
          className='ani' 
          animation={ani}
          onAnimationStart={this.aniStart.bind(this)}
          onAnimationEnd={this.aniEnd.bind(this)}
        >
          <Text onClick={this.sametimeAni}>same time</Text>
          <Text onClick={this.stepToStep}>step to step</Text>
        </View> 
        { lists }
      </View>
    );
  }
}
export default Home; 
