// index.ts
// 获取应用实例
const app = getApp<IAppOption>();
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

Page({
    data: {



        chatData: [{
            status: 0,
            text: "你好啊？"
        },
        {
            status: 1,
            text: "我很好啊"
        }
        ],
        scrollHeight: '100vh',
        inputBottom: '0'

    },
    onLoad() {
        // @ts-ignore
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
    },

    focus(e: any) {
        console.log("message-detail focus");
        console.log(e);


        keyHeight = e.detail.height;
        this.setData({
            scrollHeight: (windowHeight - keyHeight) + 'px'
        });
        this.setData({
            toView: 'msg-' + (this.data.chatData.length - 1),
            inputBottom: keyHeight + 'px'
        })
        //计算msg高度
        // calScrollHeight(this, keyHeight);

    },
    //失去聚焦(软键盘消失)
    blur(e: any) {
        console.log("message-detail blur");
        console.log(e);
        this.setData({
            scrollHeight: '100vh',
            inputBottom: '0'
        });
        this.setData({
            toView: 'msg-' + (this.data.chatData.length - 1)
        });

    },

    /**
     * 发送点击监听
     */
    sendClick(e: any) {
        console.log("message-detail sendClick");
        console.log(e);

        this.data.chatData.push({
            status: 1,
            text: e.detail.value
        });
        this.setData({
            chatData: this.data.chatData,
            inputVal: ''
        });
    },
})
