// index.ts
// 获取应用实例
import Toast from 'tdesign-miniprogram/toast/index';

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
    onClickCardItem(e:any){
        console.log(e);
        console.log("you click card item !!!!");
        wx.navigateTo({url:'/pages/detail/index'});
    },
    onClickItem2Cart2(){
        console.log("you click cart 2 shopping cart !! wtf");
        Toast({
          context: this,
          selector: '#t-toast',
          message: '点击加入购物车',
        });
    }
})
