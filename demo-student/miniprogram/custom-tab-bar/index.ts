// custom-tab-bar/index.ts
import ItemData from './bottom-items'
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
        active: 0,
        items: ItemData
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onItemChange(e: any) {
            console.log("console value = " + e.detail.value);
            this.setData({ active: e.detail.value });
            let jumpUrl = this.data.items[e.detail.value].url;
            console.log("jump url = " + jumpUrl);
            wx.switchTab({
                url: jumpUrl
            })
        },
        init() {
            const page = getCurrentPages().pop();
            const route = page ? page.route.split('?')[0] : '';

            console.log("route = " + route);

            let active = this.data.items.findIndex(
                (item) =>
                    (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
                    `${route}`,
            );
            active = active == -1 ? 0 : active;
            this.setData({ active });
        },
    }
})
