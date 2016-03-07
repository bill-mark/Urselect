'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import LoadingView from './share/LoadingView.react' 

export default class Member extends Component {
  render(){
      return (
          <View>
            <TouchableOpacity onPress={this._toMyOrder.bind(this, 1)}>
                <Text>我的订单</Text>
            </TouchableOpacity>
            <Text>--------------</Text>
            <TouchableOpacity onPress={this._toMyInfo.bind(this, 1)}>
                <Text>我的个人信息</Text>
            </TouchableOpacity>
            <Text>--------------</Text>
            <TouchableOpacity onPress={this._toMyFavorites.bind(this, 1)}>
                <Text>我的收藏</Text>
            </TouchableOpacity>
            <Text>--------------</Text>
            <TouchableOpacity onPress={this._toCoupons.bind(this, 1)}>
                <Text>我的优惠券</Text>
            </TouchableOpacity>
            <Text>--------------</Text>
            <TouchableOpacity onPress={this._toMyMessage.bind(this, 1)}>
                <Text>我的消息</Text>
            </TouchableOpacity>
          </View>
      )
  }
  
  _toMyOrder(myId) {
    this.props.navigator.push({
        name: 'myOrder',
        title: '我的订单',
        myId,
    })
  }

  _toMyInfo(myId) {
    this.props.navigator.push({
        name: 'myInfo',
        title: '我的个人信息',
        myId,
    })
  }

  _toMyFavorites(MyId) {
    this.props.navigator.push({
        name: 'myFavorites',
        title: '我的收藏',
        MyId,
    })
  }

  _toCoupons(MyId) {
    this.props.navigator.push({
        name: 'myFavorites',
        title: '我的优惠券',
        MyId,
    })
  }

  _toMyMessage(MyId) {
    this.props.navigator.push({
        name: 'myMessage',
        title: '我的消息',
        MyId,
    })
  }

}