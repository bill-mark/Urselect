'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import LoadingView from './share/LoadingView.react' 
import ViewPager from 'react-native-viewpager'
import Helper from './share/Helper'
//import WebAPI from '../utils/WebAPIUtils'
import ListItem from './share/ListItem.react'

export default class Home extends Component {
    constructor(props){
        super(props)
        let swipeDataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        })
        let listDataSource = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            swipeDataSource: swipeDataSource,
            listDataSource: listDataSource,
            isRefreshing: false,
        }
    }
    componentDidMount(){
        this.setState({
            swipeDataSource: this.state.swipeDataSource.cloneWithPages(SWIPE_IMGS),
            listDataSource: this.state.listDataSource.cloneWithRows(LIST_DATA),
            isRefreshing: false,
        })
    }
    render(){
        return (
              <ListView
                  style={styles.listView}
                  dataSource={this.state.listDataSource}
                  renderHeader={this._renderHeader.bind(this)}
                  renderRow={item => <ListItem rowData={item} navigator={this.props.navigator}/>}
                  onEndReachedThreshold={10}
                  //onEndReached={this._loadMore}
                  automaticallyAdjustContentInsets={false}
                  showsVerticalScrollIndicator={false} 
                  refreshControl={
                  <RefreshControl
                      refreshing={this.state.isRefreshing}
                      onRefresh={this._onRefresh.bind(this)}
                      tintColor='#ccc'
                      title='正在刷新'
                      colors={['#bbb','#ccc','#333']}
                      progressBackgroundColor='#f9f9f9' />
                  }
              />

            /*<View style={styles.container}>
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
            </View>*/
        )
    }

    _onRefresh() {
        this.setState({isRefreshing: true})
        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 1000)
    }

    _renderHeader(){
        return (
            <ViewPager
                style={styles.viewPager}
                dataSource={this.state.swipeDataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        )
    }

    _renderPage ( data: Object, pageID: number | string,) {
        return (
          <Image
            source={{uri: data}}
            style={styles.viewPagerimg} />
        )
    }
    
/*    _toDetail(detailId) {
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
    }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView:{
      flex: 1,
  },
  viewpager: {
    flex: 1,
  },
  viewPagerimg:{
    width: Helper.device.width,
    height: Helper.imgHeight(226),
  },

})

const SWIPE_IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
]

const LIST_DATA = [ 
    {
      id: 51,
      img: 'http://demo.urselect.com/content/images/thumbs/0000262_-2015-_280.jpeg',
      title: '安溪铁观音  抽纸盒半斤装 2015秋茶 清香型',
      oldPrice: 68.00,
      newPrice: 59.99,
      sale: 17,
    },
    {
      id: 51,
      img: 'http://demo.urselect.com/content/images/thumbs/0000262_-2015-_280.jpeg',
      title: '安溪铁观音  抽纸盒半斤装 2015秋茶 清香型',
      oldPrice: 68.00,
      newPrice: 59.99,
      sale: 17,
    },
    {
      id: 51,
      img: 'http://demo.urselect.com/content/images/thumbs/0000262_-2015-_280.jpeg',
      title: '安溪铁观音  抽纸盒半斤装 2015秋茶 清香型',
      oldPrice: 68.00,
      newPrice: 59.99,
      sale: 17,
    },    
    {
      id: 51,
      img: 'http://demo.urselect.com/content/images/thumbs/0000262_-2015-_280.jpeg',
      title: '安溪铁观音  抽纸盒半斤装 2015秋茶 清香型',
      oldPrice: 68.00,
      newPrice: 59.99,
      sale: 17,
    },
]



