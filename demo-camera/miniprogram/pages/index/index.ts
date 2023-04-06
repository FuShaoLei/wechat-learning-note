Page({
  onLoad() {
    this.ctx = wx.createCameraContext();
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res:any) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    });
  },
  error(e:any) {
    console.log(e.detail)
  },
  nave() {
    wx.navigateTo({url:'/pages/aboutper/index'});
  }
})