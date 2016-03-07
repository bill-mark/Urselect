'use strict'
import React, {
  AppRegistry,
  Navigator,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBarIOS,
} from 'react-native'

import RouteMapper from './app/RouteMapper.react'
import NavigationBar from './app/NavigationBar.react'

let SCREEN_WIDTH = Dimensions.get('window').width
let BaseConfig = Navigator.SceneConfigs.FloatFromRight
let CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // 用户中断返回手势时，迅速弹回  
  snapVelocity: 8,
  // 如下设置可以使我们在屏幕的任何地方拖动它
  edgeHitWidth: SCREEN_WIDTH,
})
let CustomSceneConfig = Object.assign({}, BaseConfig, {
  // 如下设置使过场动画看起来很快
  springTension: 500,
  springFriction: 1,
  // 使用上面我们自定义的手势
  gestures: {
    pop: CustomLeftToRightGesture,
  }
})

//顶部状态条文字变白色
StatusBarIOS.setStyle('light-content')

class Urselect extends Component {
  render() {
    return (
      <Navigator
          style={styles.container}
          initialRoute={{name: 'mainTabBar'}}
          renderScene={RouteMapper}
          configureScene={(route) => CustomSceneConfig}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBar}
              style={styles.navBar}
            />
          }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8', //全局背景色
    paddingTop: 20,
  },
  navBar: {
    backgroundColor: '#ff666b', //导航背景色
    height: 44,
  },
})

AppRegistry.registerComponent('Urselect', () => Urselect)
