'use strict'

import React, {
    Dimensions,
    PixelRatio,    
} from 'react-native'
import moment from 'moment'

exports.device = {
    //单位像素
    pixel: 1 / PixelRatio.get(),
    //屏幕尺寸
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

exports.imgHeight = function(height){
    return height*(Dimensions.get('window').width/375)
}

//时间格式化为 29分钟前，3小时前，8月7日
exports.dateDiff = function(hisTime) {
    var diffValue = new Date().getTime() - hisTime,
        result = '',
        isToday = false,
        isYesday = false,
        minute = 1000 * 60,
        hour = minute * 60,
        _hour = diffValue / hour,
        _min = diffValue / minute

    var yesday = moment().subtract(1, 'days').format('YYMMDD')
    var hisday = moment(hisTime).format('YYMMDD')

    if (hisday == moment().format('YYMMDD')) {
        isToday = true
    }
    if (hisday == yesday) {
        isYesday = true
    }

    if (!isToday && !isYesday) {
        result = moment(hisTime).format('YY.MM.DD')
    } else if (isYesday) {
        result = "昨天"
    } else if (isToday && _hour >= 1) {
        result = parseInt(_hour) + "小时前"
    } else if (isToday && _min >= 1) {
        result = parseInt(_min) + "分钟前"
    } else {
        result = "刚刚"
    }
    return result
}

//倒计时 格式:3天3小时
exports.countDown = function(endTime, currentTime) {
    var diff = parseInt( moment(endTime).diff( moment(currentTime) )/1000 )
    var day = Math.floor( diff/(60*60*24) )
    var hour = Math.floor( (diff - day*24*60*60)/3600 )
    var minute = Math.floor( (diff - day*24*60*60 - hour*60*60)/60 )
    return {
        day: day,
        hour: hour,
        minute: minute
    }
}

