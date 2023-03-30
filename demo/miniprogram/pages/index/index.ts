// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        testArray: [
            {
                message: 'foo'
            },
            {
                message: 'bar'
            }
        ],
        goodsItems: [
            {
                price: 80
            },
            {
                price: 180
            },
            {
                price: 99
            },
            {
                price: 77
            },
            {
                price: 177
            },
            {
                price: 79
            }
        ]
    },
    onShow() {
        this.getTabBar().init();
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                active: 0
            })
        }
    },
    onClickCardItem(){
        console.log("you click card item !!!!");
        wx.navigateTo({url:'/pages/detail/index'});
    }
})
