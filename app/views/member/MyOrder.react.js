'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'
import LoadingView from '../share/LoadingView.react' 

export default class MyOrder extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
                    <ScrollView tabLabel='全部'>
                        <Text>全部</Text>
                    </ScrollView>
                    <ScrollView tabLabel='待付款'>
                        <Text>待付款</Text>
                    </ScrollView>
                    <ScrollView tabLabel='待发货'>
                        <Text>待发货</Text>
                    </ScrollView>
                    <ScrollView tabLabel='待收货'>
                        <Text>待收货</Text>
                    </ScrollView>
                    <ScrollView tabLabel='待评价'>
                        <Text>待评价</Text>
                    </ScrollView>
                </ScrollableTabView>
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