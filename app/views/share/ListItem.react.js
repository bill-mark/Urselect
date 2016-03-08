'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  navigator,
  TouchableHighlight,
} from 'react-native'

import Helper from './Helper'

export default class ListItem extends Component {
    render(){
        let { rowData } = this.props
        return (
          <TouchableHighlight 
              style={styles.container} 
              onPress={this._toDetail.bind(this, rowData.id)}
              underlayColor='#fff'>
              <View style={styles.itemView}>
                  <Image 
                      source={{uri: rowData.img}}
                      style={styles.img} />
                  <View style={styles.info}>
                      <Text style={styles.title}>{rowData.title}</Text>
                      <Text style={styles.sale}>已售出 {rowData.sale} 件 原价:{rowData.oldPrice}</Text>
                      <Text style={styles.newPrice}>¥ {rowData.newPrice}</Text>
                  </View>
                  <Image
                      source={require('../../images/shopcarts.png')}
                      style={styles.icon} />
              </View>
          </TouchableHighlight>
        )
    }
     _toDetail(itemId) {
      this.props.navigator.push({
          name: 'detail',
          title: '商品详情',
          itemId,
      })
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight:10,
    marginLeft:10,
  },
  itemView:{
      flex:1,
      flexDirection:'row',
      padding:10,
      marginTop:10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.06)',
      backgroundColor:'#fff',
  },
  img:{
    width:80,
    height:80,
    marginRight:10,
  },
  info:{
    flex:1,
  },
  title:{
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 10,
    height: 35,
    overflow: 'hidden',
  },
  sale:{
    fontSize: 12,
    color: '#999',
  },
  newPrice:{
    fontSize: 16,
    marginTop: 5,
    color: '#ff666b',
  },

  icon:{
    position:'absolute',
    bottom:10,
    right:10,
    width:20,
    height:20,
  },
})





