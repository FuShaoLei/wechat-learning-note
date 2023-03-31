// components/good-card/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    priceText: {
      type: Number,
      value: 999
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avator: 'https://tdesign.gtimg.com/miniprogram/images/example2.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      this.triggerEvent('clickc', { price: this.properties.priceText });
    },
    add2CartHandler: function () {
      this.triggerEvent('add-cart', { price: this.properties.priceText });
    }
  }
})
