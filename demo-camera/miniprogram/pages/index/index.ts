Page({
  data: {
    src: ''
  },
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
      }
    });
  },
  error(e: any) {
    console.log(e.detail)
  },
  nave() {
    wx.navigateTo({ url: '/pages/aboutper/index' });
  },
  uploadImg() {
    console.log("要上传的链接是：" + this.data.src);
    wx.uploadFile({
      url: 'http://192.168.0.63:8088/upload',
      filePath: this.data.src,
      name:'imgFile',
      formData:{
        'imgName':'funny dog'
      },
      success(res) {
        console.log(res);
      }
    });
  },
  // 测试
  testSpringBoot() {
    wx.request({
      url: 'http://192.168.0.63:8088/test',
      method: 'GET',
      success(res) {
        console.log(res);
      }
    });
  }
})