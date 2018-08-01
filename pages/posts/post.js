// 使用require方法加载js模块文件
var postsData = require('../../data/posts-data.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图 
        indicatorDots: true, // 小圆点
        autoplay: true, // 自动切换
        circular: true, // 衔接滑动
        vertical: false, // 垂直滚动
        interval: 5000, // 自动切换时间间隔
        duration: 1000 // 滑动动画时长
    },
    postDetail(event) {
        // 获取自定义数据
        var postId = event.currentTarget.dataset.postid;
        console.log(postId);
        // 跳转到详情页并传参
        wx.navigateTo({
            url: `../post-detail/post-detail?id=${postId}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(1);
        this.setData({
            posts_data: postsData.postList
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log(3);
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log(2);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
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