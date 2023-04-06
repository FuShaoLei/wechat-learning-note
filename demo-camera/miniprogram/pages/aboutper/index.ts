// pages/aboutper/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {

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
    openSetting() {
        wx.openSetting({
            success(res: any) {
                console.log(res.authSetting);
            }
        })
    },
    getSetting() {
        wx.getSetting({
            success(res: any) {
                console.log(res.authSetting);
            }
        });
    },
    // 获取摄像头权限
    getCameraPermission() {
        // 通过 wx.getSetting 查询是否已经获得权限
        wx.getSetting({
            success(res: any) {
                if (!res.authSetting['scope.werun']) {// 未获得权限的处理
                    console.log("权限未授权");
                    wx.authorize({
                        scope:'scope.werun',
                        success() {
                            console.log("你已经成功请求了权限");
                        },
                        fail() {
                            console.log("omg 你特么的居然拒绝了");
                        }
                    });

                } else { // 获得权限的处理
                    console.log("录音已授权");
                }
            }
        });
    }
})