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
                      style={styles.img}
                      source={{uri: rowData.img}} />
                  <View style={styles.info}>
                      <Text style={styles.title}>{rowData.title}</Text>
                      <Text>
                          <Text style={styles.newPrice}>¥{rowData.newPrice} </Text>
                          <Text style={styles.oldPrice}>¥{rowData.oldPrice}</Text>
                      </Text>
                      <View style={styles.saleView}>
                          <Text style={styles.sale}>{rowData.sale}人已经购买</Text>
                      </View>
                  </View>
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
    marginBottom: 15,
    height: 35,
    overflow: 'hidden',
  },
  newPrice:{
    fontSize: 16,
    paddingRight: 10,
  },
  oldPrice:{
    fontSize: 12,
    color: '#999',
  },
  saleView:{
    borderTopWidth: Helper.device.pixel,
    borderColor:'#333',
    marginTop: 5,
    paddingTop: 5,
  },
  sale:{
    fontSize: 12,
    color: '#999',
  },

})





