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

export default class Home extends Component {
    render(){
        return (
            <View>

              <TouchableOpacity onPress={this._toDetail.bind(this, 1)}>
                  <Text>去商品详情</Text>
              </TouchableOpacity>
              <Text>--------------</Text>
              <TouchableOpacity onPress={this._toSearch.bind(this)}>
                  <Text>搜索</Text>
              </TouchableOpacity>
              <Text>--------------</Text>
              <TouchableOpacity onPress={this._toList.bind(this)}>
                  <Text>列表</Text>
              </TouchableOpacity>
              <Text>--------------</Text>
              <TouchableOpacity onPress={this._toLogin.bind(this)}>
                  <Text>登录</Text>
              </TouchableOpacity>
              <Text>--------------</Text>
              <TouchableOpacity onPress={this._toReg.bind(this)}>
                  <Text>注册</Text>
              </TouchableOpacity>
            </View>
        )
    }
    
    _toDetail(detailId) {
      this.props.navigator.push({
          name: 'detail',
          title: '商品详情',
          detailId,
      })
    }

    _toSearch() {
      this.props.navigator.push({
          name: 'search',
          title: '搜索',
      })
    }

    _toList() {
      this.props.navigator.push({
          name: 'list',
          title: '列表',
      })
    }

    _toLogin() {
      this.props.navigator.push({
          name: 'login',
          title: '登录',
      })
    }

    _toReg() {
      this.props.navigator.push({
          name: 'reg',
          title: '注册',
      })
    }
}

