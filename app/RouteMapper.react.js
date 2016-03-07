'use strict'
import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import MainTabBar from './MainTabBar.react'
import Home from './views/Home.react'
import List from './views/List.react'
import Detail from './views/Detail.react'
import Search from './views/Search.react'
import SearchList from './views/SearchList.react'
import Category from './views/Category.react'
import Cart from './views/Cart.react'

import Member from './views/Member.react'
import MyOrder from './views/member/MyOrder.react'
import MyAddress from './views/member/MyAddress.react'
import EditMyAddress from './views/member/EditMyAddress.react'
import MyFavorites from './views/member/MyFavorites.react'
import MyInfo from './views/member/MyInfo.react'
import MyMessage from './views/member/MyMessage.react'
import MyCoupons from './views/member/MyCoupons.react'

import Login from './views/accout/Login.react'
import Reg from './views/accout/Reg.react'
import FindPassword from './views/accout/FindPassword.react'


export default (route, navigator) => {

    switch(route.name){
      case 'home':
          return <Home navigator={navigator} />
      case 'list':
          return <List navigator={navigator} />
      case 'detail':
          return <Detail navigator={navigator} />
      case 'search':
          return <Search navigator={navigator} />
      case 'searchList':
          return <SearchList navigator={navigator} />
      case 'category':
          return <Category navigator={navigator} />
      case 'cart':
          return <Cart navigator={navigator} />

      case 'member':
          return <Member navigator={navigator} />
      case 'myOrder':
          return <MyOrder navigator={navigator} />
      case 'myAddress':
          return <MyAddress navigator={navigator} />
      case 'editMyAddress':
          return <EditMyAddress navigator={navigator} />
      case 'myFavorites':
          return <MyFavorites navigator={navigator} />
      case 'myInfo':
          return <MyInfo navigator={navigator} />
      case 'myMessage':
          return <MyMessage navigator={navigator} />
      case 'myCoupons':
          return <MyCoupons navigator={navigator} />

      case 'login':
          return <Login navigator={navigator} />
      case 'reg':
          return <Reg navigator={navigator} />
      case 'findPassword':
          return <FindPassword navigator={navigator} />

        default:
          return <MainTabBar navigator={navigator} />          
    }

}

