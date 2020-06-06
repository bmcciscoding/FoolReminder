import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Home from './pages/home'

import counterStore from './store/counter'
import todoStore from './store/todo'

import './app.css'

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
      'pages/home/home',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/home',
          text: 'Home'
        },
        {
          pagePath: 'pages/index/index',
          text: 'Home'
        },
        {
          pagePath: 'pages/index/index',
          text: 'Home'
        },
        {
          pagePath: 'pages/index/index',
          text: 'Home'
        }
      ]
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
