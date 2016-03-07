'use strict'
import React, {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
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
        <Image 
           source={require('./images/icon-back.imageset/icon-back.png')}
           style={styles.navBarLeftIcon} />
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
    return (
      <View />
    )
  },

  Title(route, navigator, index, navState) {
    if (!route.title) {
      return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          我的APP
        </Text>
      )
    }
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  },

}

const styles = StyleSheet.create({
  navBarText: {
    top: Platform.OS == 'ios' ? 0 : 24,
    fontSize: 14,
    color: '#fff',
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarLeftIcon:{
   height:22,
  },
  rightBtnView:{

  },
})
