'use strict'
import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

export default {
  
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>返回
        </Text>
      </TouchableOpacity>
    )
  }

  RightButton(route, navigator, index, navState) {
    return (
      <View />
    )
  }

  Title(route, navigator, index, navState) {
    if(!route.title){
      return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          我的APP
        </Text>
      )
    }
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {/*route.title*/}内页标题
      </Text>
    )
  }

}