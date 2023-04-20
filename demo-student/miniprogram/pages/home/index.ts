// pages/home/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        autoplay: true,
        duration: 500,
        interval: 5000,
        swiperList:["https://tdesign.gtimg.com/miniprogram/images/swiper1.png","https://tdesign.gtimg.com/miniprogram/images/swiper2.png","https://tdesign.gtimg.com/miniprogram/images/swiper1.png","https://tdesign.gtimg.com/miniprogram/images/swiper2.png"],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getTabBar().init();
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                active: 0
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    handlerClickStudentItem(){
        wx.navigateTo({url:'/pages/home-student/index'});
    },
    handlerClickHomeworkItem() {
        wx.navigateTo({url:'/pages/homework-manager-main/index'});
    }
})