import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Icon, Checkbox, CheckboxGroup, Image } from '@tarojs/components';

import './todo-select-box.scss'

class TodoSelectBox extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    const { contents } = this.props
    const list = contents ? contents.map((content, index) => {
      return (
        <Text
          className={`item_${index}`}
          key={content}
          onClick={this.props.onSelectIndex.bind(this, index)}
        >{content}</Text>
      )
    }) : null
    return (
      <View className='box'>
        {list}
      </View>
    )
  }
}

export default TodoSelectBox;