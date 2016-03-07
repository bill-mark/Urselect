'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import LoadingView from './share/LoadingView.react' 

export default class Cart extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Cart</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
    },

})