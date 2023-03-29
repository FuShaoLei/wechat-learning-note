// custom-tab-bar/index.ts
import TabMenu from './data';
Component({

  data:{
    active: 0,
    list: TabMenu
  },

    /**
     * 组件的方法列表
     */
    methods: {
      onChange(event:any) {
        console.log("xxxxxxx = "+event.detail.value);
        this.setData({active:event.detail.value});


        let mUrl = `${this.data.list[event.detail.value].url}`;
        console.log("mUrl = "+mUrl);
        wx.switchTab({
          url:mUrl,
          success:()=>{
            console.log("switchTab success!!!!");
          },
          fail:()=>{
            console.log("switchTab faild 0.0");
          },
          complete:()=>{
            console.log("switchTab complete");
          }
        })
    
      },
  
      init() {
        const page = getCurrentPages().pop();
        const route = page ? page.route.split('?')[0] : '';

        console.log("route = "+route);

        let active = this.data.list.findIndex(
          (item) =>
            (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
            `${route}`,
        );
        active = active == -1?0:active;
        console.log("active = "+active);
        this.setData({ active });
      },
    }
})
