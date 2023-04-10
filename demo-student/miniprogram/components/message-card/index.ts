// components/message-card/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        hanlderClickMsgItem() {
            console.log("处理item的点击事件!");
            wx.navigateTo({url:'/pages/message-detail/index'});
        }
    }
})
