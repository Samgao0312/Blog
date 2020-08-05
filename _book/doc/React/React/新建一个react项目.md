# 新建一个 React 项目

```js
$ cnpm install -g create-react-app

// 创建一个 react 项目
// 缺点：慢，巨慢
// 原因：在拉取资源时，实际上调用的是npm
$ create-react-app my-app


// 解决
npm config set registry https://registry.npm.taobao.org //把npm源改成走淘宝镜像，这样使用npm、cnpm就没有区别了
// 配置后可通过下面方式来验证是否成功
npm config get registry //或npm info express


// 启动项目
$ cd my-app/
$ npm start
```