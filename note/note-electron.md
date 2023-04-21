## npm换源

```
npm config set registry https://registry.npmmirror.com/
```

> 查看源地址：
>
> ```
> npm config get registry
> ```

## 安装yarn

[yarn官网指路](https://yarnpkg.com/)

首先全局安装yarn，我也不知道干嘛要安装这个东西，反正我就是这么成功的

以管理员身份打开cmd，然后输入

```
npm install -g yarn
```

安装完成后可以使用`yarn -v`检测是否安装成功

## 第一个electron程序

以下需要yarn的操作都在cmd中进行

初始化项目

```
yarn init
```

或者可以使用`yarn init -y`快速创建下来，然后才去`packager.json`里去修改

然后安装electron

```
yarn add --dev electron
```

创建`index.html`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
  </body>
</html>
```

创建`index.js`：

```javascript
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
```

然后根据情况修改你的`package.json`文件，下面是示例：

```json
{
  "name": "demo-electron",
  "version": "1.0.0",
  "main": "index.js",
  "author": "god",
  "description": "Hello World!",
  "license": "MIT",
  "scripts": {
    "start":"electron ."
  },
  "devDependencies": {
    "electron": "^24.0.0"
  }
}
```

> author和description也是要填的，后面使用electron-forge时会用到

运行：

```
npm run start
```

## 使用electron-forge打包

安装electron-forge：

```
yarn add --dev @electron-forge/cli
```

然后执行

```
npx electron-forge import
```

然后打包

```
yarn run make
```

打包完成后就可以在out文件夹里看到相应的包了



## 使用electron-builder打包成可安装程序

可参考仓库中的[demo-electron-build](../demo-electron-build])项目

[electron-builder官网传送](https://www.electron.build/)

安装electron-builder：

```
yarn add electron-builder --dev
```

在你的`package.json`文件添加一些electron-builder的配置语句，我的完整`package.json`文件如下，供参考：

```json
{
  "name": "2023042103",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "author": "mygod",
  "description": "hello the fucking world",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder --win --x64"
  },
  "devDependencies": {
    "electron": "^24.1.2",
    "electron-builder": "^23.6.0"
  },
  "build": {
    "appId": "com.github.fushaolei",
    "productName": "demo2023042103",
    "win": {
      "target": "nsis",
      "icon":"./icon.jpg"
    },
    "nsis": {
      "oneClick": false,
      "perMachine": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true
    }
  }
}

```

然后在cmd中：

```
yarn run build
```

