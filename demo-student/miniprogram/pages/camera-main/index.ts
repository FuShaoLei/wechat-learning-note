// pages/camera-main/index.ts
import Toast from 'tdesign-miniprogram/toast/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.ctx = wx.createCameraContext();
    },
    takePhoto() {
        this.ctx.takePhoto({
          quality: 'high',
          success: (res: any) => {
            console.log(res.tempImagePath);
            this.setData({
              src: res.tempImagePath
            });
            this.data.src = res.tempImagePath;
            Toast({
              context: this,
              selector: '#t-toast',
              message: '拍摄成功，图片地址是'+res.tempImagePath,
            });

          }
        });
      },
      nextStep(){
        console.log("you click nextStep："+this.data.src);
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({sPath:this.data.src});
        wx.navigateBack({url:'/pages/homework-add/index'});
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

    }
})