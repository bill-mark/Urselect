'use strict'
import React, {
  AppRegistry,
  Navigator,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
} from 'react-native'

import RouteMapper from './app/RouteMapper.react'
import NavigationBar from './app/NavigationBar.react'
import CustomSceneConfig from './app/CustomSceneConfig'

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
    //paddingTop: 2,
  },
  navBar: {
    backgroundColor: '#ff666b', //导航背景色
    height: 44,
  },
})

AppRegistry.registerComponent('Urselect', () => Urselect)
