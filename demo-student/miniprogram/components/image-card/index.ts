// components/camera-little-card/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      imgUrl:{
        type: String,
        value:''
      },
      isOnlyShow:{
        type: Boolean,
        value: false
      }
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
        onClickItem() {
            this.triggerEvent("handlerImgClick");
        },
        onClickCloseBtn() {
            this.triggerEvent("handlerImgCloseBtn");
        }
    }
})
