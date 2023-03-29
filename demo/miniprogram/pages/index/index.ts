// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
      testArray:[
          {
              message:'foo'
          },
          {
              message:'bar'
          }
      ]
  },
  onShow(){
    this.getTabBar().init();
    if (typeof this.getTabBar === 'function' &&
  this.getTabBar()) {
  this.getTabBar().setData({
    active: 0
  })
}
  },
})
