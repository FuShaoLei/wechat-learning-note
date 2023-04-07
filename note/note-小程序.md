## 引入第三方库

首先在miniprogram目录里边进行

```
npm init -y
```

或者？

```
npm install
```

然后引入你想引入的包：

```
npm i tdesign-miniprogram -S --production
```

然后在微信开发者ide里边点击`工具`->`构建npm`

## 底部导航栏

1. 首先要在根`app.json`中配置tabbar：

   ```json
   "tabBar": {
           "custom": true,
           "color": "#666666",
           "selectedColor": "#FF5F15",
           "backgroundColor": "#ffffff",
           "borderStyle": "black",
           "list": [
               {
                   "pagePath": "pages/index/index",
                   "text": "首页"
               },
               {
                   "pagePath": "pages/mine/index",
                   "text": "我的"
               },
               {
                   "pagePath": "pages/cart/index",
                   "text": "购物车"
               },
               {
                   "pagePath": "pages/other/index",
                   "text": "测试页面"
               }
           ]
       },
   ```

2. 然后在根目录新建一个文件夹名为`custom-tab-bar`，并初始化，其中和普通的page，component一样，有`.json`，`.ts`，`.wxml`，`.scss`文件
3. 然后你就可以在其中书写自己的逻辑

可参考: https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html

## 列表渲染

- `wx:for`：在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`
  - 可以使用`wx:for-item` 指定数组**当前元素**的变量名
  - 可以使用`wx:for-index` 可以指定数组**当前下标**的变量名
  - 当 `wx:for` 的值为字符串时，会将字符串解析成字符串数组
- `block wx:for`：渲染一个包含多节点的结构块
- `wx:key`：来列表中项目的唯一标识符（很蠢的设计

## 条件渲染

- `wx:if`条件渲染，用于判断是否要渲染此代码块
- `block wx:if`，判断是否要渲染多个组件，这里的block没有任何意义，它仅仅是一个包装元素

## 自定义组件

跟page一样的文件

必要的是要在`.json`文件中声明`"component": true`

```js
Component({

  behaviors: [],

  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },
  
  data: {}, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    onMyButtonTap: function(){
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function(newVal, oldVal) {

    }
  }

})

```

`bindtap`通常用于组件上绑定点击事件处理函数

`catchtap`可以阻止事件冒泡（传递）到父级组织

## 请求数据

首先要在 [小程序后台 -> 开发-> 开发管理-> 开发设置] 中添加域名，之后才可以正常进行数据请求

```typescript
wx.request({
    url: 'https://v1.jinrishici.com/all.json',
    method:'GET',
    success(res){
        if(res){
            console.log(res.data);
        }
    }
})
```

## 跳转页面

```typescript
wx.navigateTo({url:'/pages/detail/index'});
```

## 数据缓存

- wx.setStorageSync(string key, any data)：[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
- wx.setStorage(Object object)：[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)

## 其他

延迟执行：https://blog.csdn.net/Boxjod/article/details/122966721

## Page的生命周期

待补充，

## 请求权限相关

- [wx.openSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)：调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
- [wx.getSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)：获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
- [wx.authorize(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)：提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。
  - 如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
  - 如果用户之前已经同意过授权，但是又自己主动把他关掉了，则会直接返回失败
- 全部权限 请看 -> [Scope列表](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8)

## 拍照

```typescript
  onLoad() {
    this.ctx = wx.createCameraContext();
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res: any) => {
        console.log(res.tempImagePath);
        this.setData({
          src: res.tempImagePath
        });
        this.data.src = res.tempImagePath;
      }
    });
  }
```

## 上传文件（以上传图片为例子）

服务端

```java
@PostMapping("/upload")
public String upload(@RequestParam("imgFile") MultipartFile file,
                     @RequestParam("imgName") String name) throws Exception {


    name = name + System.currentTimeMillis();
    File dir = new File("uploadFile");
    if (!dir.exists()) {
        dir.mkdirs();
    }
    file.transferTo(new File(dir.getAbsolutePath() + File.separator + name + ".png"));

    return "you upload something" + name;
}
```

小程序端

```typescript
uploadImg() {
    console.log("要上传的链接是：" + this.data.src);
    if (this.data.src) {
        wx.uploadFile({
            url: 'http://192.168.0.63:8088/upload',
            filePath: this.data.src,
            name: 'imgFile',
            formData: {
                'imgName': 'funny dog'
            },
            success(res) {
                console.log(res);
            }
        });
    }
},
```

