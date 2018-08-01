Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    onTap() {
        // 页面跳转(可以返回)
        // wx.navigateTo({
        //     url: '../posts/post',
        //     success: function() {},
        //     fail: function() {},
        //     complete: function() {}
        // })

        // 页面跳转(不可返回)
        wx.redirectTo({
            url: '../posts/post',
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        // 返回上一个页面，本页面会被隐藏
    },

    /**
     * 生命周期函数--监听页面卸载(页面关闭)
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})