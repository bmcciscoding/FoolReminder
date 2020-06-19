# React Taro 学习笔记

React 是前端框架，Taro 是京东团队出的小程序框架。



## JS

### 基本语法

**枚举**

**import**


## Taro

**事件绑定**

```jsx
work() {

}

work1(p1, e) { // 注意 p1 在这里是第一个参数
  
}

render() {
  return (
    <View onClick={this.work}></View>
    <View onClick={this.work.bind(this, p1)}></View> // 注意 p1 在这里是第二个参数
  )
}
```

**导航**

```jsx
Taro.navigateTo({
  url: '/pages/createTodo/createTodo', // 对应 app config pages
  success: (res) => {
    console.log(res)
  },
  fail: (res) => {
    console.log(res)
  }
})
```



## CSS



### 语法
```scss
.todo {
  padding: 10px;
  background-color: lightpink;

  // 意味着 如果父节点是 todo 才生效
  .complete {
    background-color: darkseagreen;
  }
  
  .ready {
    background-color: lightcyan;
  }
}
```
```jsx
<View className='complete'>Learn CSS</View>     // fail 😭
<View className='todo'>
  <View className='complete'}>Learn CSS</View>  // success 😊
</View>
```



### 细节

**文字对其线不居中**，可以看到偏下一些
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjjabrb5nj30jg03g0sp.jpg)

```css
.title {
  
}
```

### 动画

```react
start() {
  // create animation
  var ani = Taro.createAnimation({
    duration: 1000,
    timingFunction: "ease",
    delay: 0
  })

  // set animation 
  ani
    .backgroundColor('#666666')
    .rotate(30)
    .left(100)
    .step() // 决定一步动画完成
  this.setState({
      ani: ani.export() // 导出动画
  });
}

render() {
  const { ani } = this.state  // 赋值给组件
  return (
  	<View>
      <View animation={ani}></View> 
    </View>
  )
}
```

### SCSS

## VSCode

我使用都编辑器是 VSCode，对我来说已经足够了。

**格式代码**

了解下 Web 的格式代码，真是五花八门，看得我云里雾里坐飞机。大致了解到有 prettier 和 eslint。

