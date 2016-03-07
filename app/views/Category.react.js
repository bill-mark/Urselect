'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import LoadingView from './share/LoadingView.react' 
import MenuList from './share/VerticalTab.react' 

export default class Category extends Component {
    render(){
        return (
            <View style={styles.container}>
                <MenuList data={data} nSelected={1} tabSelected={0} click={this._onPress}/>
            </View>
        )
    }
    _onPress(val){
    alert(val)
  }
}

const data = {
  "分类": {
    "热门商圈": [
      "虹桥地区",
      "徐家汇地区",
      "淮海路商业区",
      "静安寺地区",
      "上海火车站地区",
      "浦东陆家嘴金融贸易区",
      "四川北路商业区",
      "人民广场地区",
      "南翔、安亭汽车城"
    ],
    "热门行政区": [
      "静安区",
      "徐汇区",
      "长宁区",
      "黄埔区",
      "虹口区",
      "宝山区",
      "闸北区"
    ]
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 44,
    },

})