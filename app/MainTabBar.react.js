'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import LoadingView from './views/share/LoadingView.react' 

export default class MainTabBar extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>内页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 64,
    },

})