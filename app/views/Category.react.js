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
             <MenuList 
               data={data} 
               nSelected={0} 
               tabSelected={0} 
               click={this._onPress}/>
        )
    }
    _onPress(val){
    //alert(val)
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
    ],
    "热门商圈1": ["四川北路商业区"],
    "热门商圈2": ["四川北路商业区"],
    "热门商圈3": ["四川北路商业区"],
    "热门商圈4": ["四川北路商业区"],
    "热门商圈5": ["四川北路商业区"],
    "热门商圈6": ["四川北路商业区"],
    "热门商圈7": ["四川北路商业区"],
    "热门商圈8": ["四川北路商业区"],
    "热门商圈9": ["四川北路商业区"],
    "热门商圈0": ["四川北路商业区"],
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 44,
    },

})