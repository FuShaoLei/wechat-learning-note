import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
import Message from 'tdesign-miniprogram/message/index';


Page({
  data: {
    isLoading: true,
    showTextAndTitle: false,
    confirmBtn: { content: '知道了', variant: 'base' },
    dialogKey: '',
    product: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: '全部产品',
        },
        {
          value: 'new',
          label: '最新产品',
        },
        {
          value: 'hot',
          label: '最火产品',
        },
      ],
    },
    sorter: {
      value: 'default',
      options: [
        {
          value: 'default',
          label: '默认排序',
        },
        {
          value: 'price',
          label: '价格从高到低',
        },
      ],
    },
    visible: false,
    note: '',
    activeValues: [0]
  },
  onLoad() {
    setTimeout(() => {
      this.setData({ isLoading: false });
    }, 1000);
  },
  showDialog(e: any) {
    const { key } = e.currentTarget.dataset;
    this.setData({ [key]: true, dialogKey: key });
  },
  closeDialog() {
    const { dialogKey } = this.data;
    this.setData({ [dialogKey]: false });
  },
  handleAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      items: [
        {
          label: '选项一',
          id: 1001
        },
        {
          label: '选项二',
          id: 1002
        },
        {
          label: '选项三',
          id: 1003
        },
        {
          label: '选项四',
          id: 1004
        },
      ],
    });
  },
  handleSelected(e: any) {
    console.log(e.detail);
  },
  onChange(e: any) {
    this.setData({
      'product.value': e.detail.value,
    });
  },
  handleMessageNotification() {
    Message.success({
      context: this,
      offset: [20, 32],
      duration: 5000,
      content: '这是一条成功的提示消息',
    });
  },
  handleCalendar() {
    this.setData({ visible: true });
  },
  handleConfirm(e: any) {
    const { value } = e.detail;
    const format = (val: any) => {
      const date = new Date(val);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    this.setData({
      note: format(value),
    });
  },
  onClose({ detail }) {
    console.log(detail.trigger);
  },
  handleFoldChange(e: any) {
    this.setData({ activeValues: e.detail.value });
  },
  onFirstChange(e:any){
    this.setData({ first: e.detail.current });
  }
})
