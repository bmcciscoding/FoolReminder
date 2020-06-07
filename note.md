# React Taro 学习笔记

React 是前端框架，Taro 是京东团队出的小程序框架。

## CSS

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

