'use strict'
import React, {
  Navigator,
  Dimensions,
} from 'react-native'

let SCREEN_WIDTH = Dimensions.get('window').width
let BaseConfig = Navigator.SceneConfigs.FloatFromRight

let CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
	// 用户中断返回手势时，迅速弹回  
	snapVelocity: 8,
	// 如下设置可以使我们在屏幕的任何地方拖动它
	//edgeHitWidth: SCREEN_WIDTH,
})

let CustomSceneConfig = Object.assign({}, BaseConfig, {
	// 如下设置使过场动画看起来很快
	springTension: 500,
	springFriction: 1,
	// 使用上面我们自定义的手势
	gestures: {
	pop: CustomLeftToRightGesture,
	}
})

export default CustomSceneConfig