// pages/homework-add/index.ts
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';


type SelectFile = {
    path: string,
    size: number,
    name: string
}

// 照片array
let imgItemArray: string[] = [];

// 文件array，名字，长度
let fileItemArray: SelectFile[] = [];

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
        sPath: '',
        selectedFile: [],
        maxSelectCount: 5,
        cur: {},
        options: [
            { label: '全选', checkAll: true },
            { label: '1班', value: 1 },
            { label: '2班', value: 2 },
        ],
        checkAllValues: [1, 2],
        selectedClass: "1班，2班",

        imgViewVisible: false,
        closeBtn: true,
        showIndex: true,
        defaultIndex: 0
    },
    /**
     * 获取当前日期，主要用于选择结束时间
     */
    getFormatterTime() {

    },
    showPicker(e: any) {
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
    onConfirm(e: any) {
        const { value } = e.detail;
        const { mode } = this.data;

        console.log('confim', value);

        this.setData({
            [mode]: value,
            [`${mode}Text`]: value,
        });

        this.hidePicker();
    },

    onColumnChange(e: any) {
        console.log('pick', e.detail.value);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}/${month}/${day}`;
        this.setData({
            dateText: dateString
        });


        console.log("homework-add onload");

        imgItemArray = [];

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getFormatterTime();
        console.log("homework-add onReady");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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
        wx.chooseMedia({
            count: 9,
            mediaType: ['image'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                console.log("wx.chooseMedia success");
                console.log("before imgItemArray.length = "+imgItemArray.length);
                for (let i = 0; i < res.tempFiles.length; i++) {
                    console.log(res.tempFiles[i].tempFilePath);
                    imgItemArray.push(res.tempFiles[i].tempFilePath);
                }
                console.log("after tempArray.length = " + imgItemArray.length);
                this.setData({ imgArrays: imgItemArray });
            }
        })

        // ActionSheet.show({
        //   theme: ActionSheetTheme.List,
        //   selector: '#t-action-sheet',
        //   context: this,
        //   items: [
        //     {
        //       label: '拍照',
        //       id: 1001
        //     },
        //     {
        //       label: '选择文件',
        //       id: 1002
        //     }
        //   ],
        // });
    },



    // 2023年4月12日 暂且用不到
    handleActionSheetSelected(e: any) {
        let id = e.detail.selected.id;
        console.log("you selected id = " + id);
        if (id == 1001) {
            // 跳转去拍摄界面
            wx.navigateTo({ url: '/pages/camera-main/index' });

        } else if (id == 1002) {
            wx.chooseMedia({
                count: 9,
                mediaType: ['image'],
                sourceType: ['album', 'camera'],
                maxDuration: 30,
                camera: 'back',
                success(res) {
                    console.log(res.tempFiles.tempFilePath)
                    console.log(res.tempFiles.size)
                }
            })
        }
    },
    clickImgItem(e: any) {
        console.log(e);
        console.log("you click clickImgItem");
        const {index} = e.detail;
        this.setData({imgList:imgItemArray, imgViewVisible:true, defaultIndex:index})
    },
    onImgViewerClose(){
      this.setData({imgViewVisible:false});  
    },
    clickImgItemClose(e: any) {
        const { index } = e.detail;
        imgItemArray.splice(index, 1);
        this.setData({ imgArrays: imgItemArray });

    },
    onVisibleChange(e: any) {
        this.setData({
            visible: e.detail.visible,
        });
    },
    clickAddMessageFile() {
        wx.chooseMessageFile({
            count: 10, // 可选择文件的数量
            type: 'all', // 可选择的文件类型，可以是 'image', 'video', 'audio' 或 'file'
            success: (res) => {
                for (let i = 0; i < res.tempFiles.length; i++) {
                    let { path, size, name } = res.tempFiles[i];
                    fileItemArray.push({ path, size, name });
                }
                this.setData({ fileItems: fileItemArray });
            }
        })
    },
    onClickFileItem(e: any) {
        const index = e.currentTarget.dataset.index;
        fileItemArray.splice(index, 1);
        this.setData({ fileItems: fileItemArray });
    },

    // 选择班级弹出框处理

    showClassPick(e: any) {
        console.log("you click showClassPick");
        console.log(e);

        const { item } = e.currentTarget.dataset;

        this.setData({ cur: item, }, () => { this.setData({ popVisible: true }); });
    },

    onPopVisibleChange(e: any) {
        console.log("you click onPopVisibleChange");
        console.log(e);
        this.setData({ popVisible: e.detail.visible })
    },
    onCheckAllChange(event: any) {

        console.log('checkbox', event.detail.value);
        console.log(event);
        this.setData({ checkAllValues: event.detail, });

        let seletedClassText = "";

        for (let i = 0; i < event.detail.value.length; i++) {
            const label = this.data.options.find(item => item.value == event.detail.value[i])?.label;

            if (label != undefined) {
                console.log("label = " + label);
                if (i != 0) {
                    console.log("i !== 0");
                    seletedClassText += "，"
                }
                seletedClassText += label;
            }


        }


        this.setData({ selectedClass: seletedClassText });

    },
    clickPopConfirm(e: any) {
        this.setData({ popVisible: false });
    }

})