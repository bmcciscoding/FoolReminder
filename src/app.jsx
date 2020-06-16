import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'

import Home from './pages/home'
import OneDay from './pages//oneday'

import counterStore from './store/counter'
import todoStore from './store/todo'

import './app.scss'
// import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  todoStore
}

class App extends Component {

  config = {
    pages: [
      'pages/oneday/oneday',
      'pages/home/home',
      'pages/createTodo/createTodo',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'black',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000000',
      selectedColor: '#FFAA5A',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/home/home',
          text: 'TODO'
        },
        {
          pagePath: 'pages/oneday/oneday',
          text: '一天'
        },
        {
          pagePath: 'pages/index/index',
          text: '统计'
        },
        {
          pagePath: 'pages/index/index',
          text: '我的'
        }
      ]
    }
  }

  componentWillMount () {
    Taro.fr_showToast = (str) => {
      Taro.showToast({
        title: str,
        icon: 'none',
        duration: 1000
      })
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
