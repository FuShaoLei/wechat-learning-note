// pages/homework-detail/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList:["https://tdesign.gtimg.com/miniprogram/images/example2.png","https://tdesign.gtimg.com/miniprogram/images/example1.png",
        "https://tdesign.gtimg.com/miniprogram/images/example3.png","https://tdesign.gtimg.com/miniprogram/images/example4.png","https://tdesign.gtimg.com/miniprogram/images/example5.png"],
        imgViewVisible: false,
        closeBtn: true,
        showIndex: true,
        defaultIndex: 0
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
    clickImgItem(e:any) {
        console.log(e);
        console.log("you click img item");
        const {index} = e.detail;
        console.log("index = " + index);
        this.setData({
            imgViewVisible:true,
            defaultIndex:index});
    },
    onImgViewerClose(e:any) {
        this.setData({imgViewVisible:false});
    }

})