## 安装electron

参考链接：https://zhuanlan.zhihu.com/p/562217675

在一个目录里进行：

```
npm init -y
```

然后

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```

```
cnpm install --save-dev electron
```

在根目录下，修改`package.json`成如下：

```json
{
  "name": "electron",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Jane Doe",
  "license": "ISC",
  "devDependencies": {
    "electron": "^23.2.1"
  }
}
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

然后启动：

```
npm run start
```

