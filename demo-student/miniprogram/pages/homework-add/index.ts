// pages/homework-add/index.ts
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        mode: '',
        dateVisible: false,
        date: Date.now(), // 支持时间戳传入
        dateText: '',
    
        // 指定选择区间起始值
        start: '2000-01-01 00:00:00',
        end: '2050-01-01 00:00:00',
        sPath:''
    },
    showPicker(e:any) {
        const { mode } = e.currentTarget.dataset;
        this.setData({
          mode,
          [`${mode}Visible`]: true,
        });
      },
      hidePicker() {
        const { mode } = this.data;
        this.setData({
          [`${mode}Visible`]: false,
        });
      },
      onConfirm(e:any) {
        const { value } = e.detail;
        const { mode } = this.data;
    
        console.log('confim', value);
    
        this.setData({
          [mode]: value,
          [`${mode}Text`]: value,
        });
    
        this.hidePicker();
      },
    
      onColumnChange(e:any) {
        console.log('pick', e.detail.value);
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options:any) {
      console.log("homework-add onload");
      console.log('id', options.id)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      console.log("homework-add onshow");
      console.log("sPath = "+this.data.sPath);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    clickAddFile() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '拍照',
            id: 1001
          },
          {
            label: '选择文件',
            id: 1002
          }
        ],
      });
    },
    handleActionSheetSelected(e:any){
      let id =  e.detail.selected.id;
      console.log("you selected id = "+id);
      if(id == 1001) {
        // 跳转去拍摄界面
        wx.navigateTo({url:'/pages/camera-main/index'});

      } else if(id == 1002) {
        // 选择文件
      }
    }
})