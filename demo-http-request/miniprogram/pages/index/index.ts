// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    // 网络请求设置
    wx.request({
      url: 'https://v1.jinrishici.com/all.json',
      method: 'GET',
      success(res) {
        console.log(res);
        if (res) {
          console.log(res.data);
        }
      }
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    } else {
      let a = "xxx";
      console.log(a);
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  requestGet() {
    // 网络请求设置
    wx.request({
      url: 'https://v1.jinrishici.com/all.json',
      method: 'GET',
      success(res) {
        console.log(res);
        if (res) {
          console.log(res.data);
        }
      }
    })
  },
  downloadAndOpenPdf() {
    wx.downloadFile({
      url: 'http://192.168.0.63:8088/downloadFile',
      success(res) {
        const filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            console.log(res + "打开文档成功");
          }
        })

      }
    });
  }
})
