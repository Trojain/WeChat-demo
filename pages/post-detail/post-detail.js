var postsData = require('../../data/posts-data.js')
var app = getApp(); // 获取app.js的全局变量
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlayingMusic: false
    },
    // 点击收藏
    onCollectionTap() {
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[this.data.postId];
        postsCollected[this.data.postId] = !postCollected;
        wx.setStorageSync('posts_collected', postsCollected);
        this.setData({
            collected: !postCollected
        });
        // 提示框
        wx.showToast({
            title: postCollected ? '取消成功' : '收藏成功',
            duration: 1000,
            icon: 'none'
        })
    },
    // 分享
    onShareTap() {
        var itemList = ['分享给微信好友', '分享到朋友圈', '分享到QQ', '分享到微博']
        wx.showActionSheet({
            itemList: itemList,
            success(res) {
                console.log(res.tapIndex); // 点击的序号
                wx.showToast({
                    title: '你点击了' + itemList[res.tapIndex],
                    icon: 'none'
                });
            }
        });
    },
    // 播放音乐
    onMusicTap() {
        var isPlayingMusic = this.data.isPlayingMusic;
        if (isPlayingMusic) {
            // 暂停播放
            wx.pauseBackgroundAudio();
            this.setData({
                isPlayingMusic: false
            })
        } else {
            // 使用后台播放器播放音乐
            wx.playBackgroundAudio({
                dataUrl: this.data.postData.music.url,
                title: this.data.postData.music.title,
                coverImgUrl: this.data.postData.music.coverImg
            })
            this.setData({
                isPlayingMusic: true
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // options为上个页面传递过来的参数
        var postId = options.id;
        var postData = postsData.postList[postId];
        console.log(postData)
        this.setData({
            postData,
            postId
        });
        var postsCollected = wx.getStorageSync('posts_collected');
        if (postsCollected) {
            var postCollected = postsCollected[postId];
            this.setData({
                collected: postCollected
            });
        } else {
            var postsCollected = [];
            wx.setStorageSync('posts_collected', postsCollected);
        }

        var _this = this;
        // 监听音乐播放
        wx.onBackgroundAudioPlay(() => {
            _this.setData({
                isPlayingMusic: true
            })
            app.globalData.g_isPlayingMusic = true
            app.globalData.g_currentMusicId = postId
        })
        // 监听音乐暂停
        wx.onBackgroundAudioPause(() => {
            _this.setData({
                isPlayingMusic: false
            })
            app.globalData.g_isPlayingMusic = false
            app.globalData.g_currentMusicId = null
        })

        // 获取app.js中g_isPlayingMusic和g_currentMusicId的属性
        if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicId == postId) {
            this.setData({
                isPlayingMusic: true
            })
        }

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