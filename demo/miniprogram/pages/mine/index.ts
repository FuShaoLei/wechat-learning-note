// pages/mine/index.ts
const avator = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';


Page({

    /**
     * 页面的初始数据
     */
    data: {
        ava:'https://tdesign.gtimg.com/miniprogram/images/example2.png',
        listItemData: [
            {
                icon: 'internet',
                title: '互联网',
                url: '/'
            },
            {
                icon: 'logo-qq',
                title: '扣扣',
                url: '/'
            },
            {
                icon: 'notification',
                title: '提醒',
                url: '/'
            },
            {
                icon: 'qrcode',
                title: '扫描二维码',
                url: '/'
            },
            {
                icon: 'shop',
                title: '购物',
                url: '/'
            },
        ]

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
    onShow(){
      this.getTabBar().init();
      if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      active: 2
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

    }
})