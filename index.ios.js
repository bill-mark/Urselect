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

StatusBarIOS.setStyle('light-content')

class Urselect extends Component {
  render() {
    return (
      <Navigator
          style={styles.container}
          initialRoute={{name: 'mainTabBar'}}
          renderScene={RouteMapper}
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
    backgroundColor:'#f8f8f8',
    paddingTop: 20,
  },
  navBar: {
    backgroundColor: '#ff666b',
    height: 44,
  },
})

AppRegistry.registerComponent('Urselect', () => Urselect)
