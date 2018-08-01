# 小程序(第七章)


移动设备像素分辨率：

设备		屏幕尺寸   逻辑分辨率(pt)   Reader   物理分辨率(px)   PPI(DPI)
iphone 3GS    3.5寸      320*480          @1x       320*480         163
iphone 4S     3.5寸      320*480          @2x       640*960         326
iphone 5S     4.0寸      320*568          @2x       640*1136        326
iphone 6S     4.7寸      375*667          @2x       750*1334        326
iphone 6SP    5.5寸      414*736          @3x       1242*2208       401


1.pt的大小和屏幕尺寸有关系，简单可以理解为长度和视觉单位
2.逻辑分辨率 * Reader = 物理分辨率


Reader: 2倍是人眼极限(因此人眼感觉 iphone 6S 与 iphone 6SP 清晰度差不多)
PPI：计算机行业
DPI: 打印行业


小程序下：
iphone 6/6S下    1px = 1rpx = 0.5pt
iphone 6P/6SP下  1px = 0.6rpx






# 赋值
this.setData({
	data:postData
})



# 小程序Storage缓存上限不超过10MB

// 设置缓存(localstorage)
wx.setStorageSync(key, data)    -同步
wx.setStorage(key, data)        -异步


// 获取缓存(localstorage)
wx.getStorageSync(key)          -同步
wx.getStorage(key)              -异步


// 删除单个缓存(localstorage)
wx.removeStorageSync(key)       -同步
wx.removeStorage(key)           -异步


// 删除所有缓存(localstorage)
wx.clearStorageSync()           -同步
wx.clearStorage()               -异步
