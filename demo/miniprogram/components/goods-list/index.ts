// components/goods-list/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        goodsItems:{
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        items: [
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

    /**
     * 组件的方法列表
     */
    methods: {
        onClickCard(){
          this.triggerEvent('clickcc',{id:2});
        }
    }
})
