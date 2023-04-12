// components/select-img-list/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgUrlArray:{
            type:Array,
            value: []
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
        onClickAddFile() {
            this.triggerEvent("onClickAddFile");
        },
        onClickItemImg(e: any) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent("onClickListItem", { index });
        },
        onClickItemClose(e: any) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent("onClickListItemClose", { index });
        }
    }
})
