'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Home from './views/Home.react'
import Category from './views/Category.react'
import Cart from './views/Cart.react'
import Member from './views/Member.react'
import LoadingView from './views/share/LoadingView.react' 

export default class MainTabBar extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        selectedTab: 'home',
      }
    }
    render(){
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color:'#ff666b'}}
                        title="首页"
                        renderIcon={() => <Image style={styles.icon} source={require('./images/icon-home.imageset/icon-home.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/icon-home-active.imageset/icon-home-active.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'category'}
                        selectedTitleStyle={{color:'#ff666b'}}
                        title="分类"
                        renderIcon={() => <Image style={styles.icon} source={require('./images/icon-category.imageset/icon-category.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/icon-category-active.imageset/icon-category-active.png')} />}
                        onPress={() => this.setState({ selectedTab: 'category' })}>
                        <Category navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        selectedTitleStyle={{color:'#ff666b'}}
                        title="购物车"
                        renderIcon={() => <Image style={styles.icon} source={require('./images/icon-cart.imageset/icon-cart.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/icon-cart-active.imageset/icon-cart-active.png')} />}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'member'}
                        selectedTitleStyle={{color:'#ff666b'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.icon} source={require('./images/icon-member.imageset/icon-member.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/icon-member-active.imageset/icon-member-active.png')} />}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'member' })}>
                        <Member navigator={this.props.navigator} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
    },
    icon: {
        width: 25,
        height: 25,
    },

})