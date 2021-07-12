# [prevent-repeat-click.js][github-url]  [![NPM Version][npm-image]][npm-url]
## 简介
`prevent-repeat-click` 是一个按钮防重复点击的一个小工具。
## 安装
```js
npm install prevent-repeat-click --save
```
## 使用
### 引入
导出两个函数
- syncPreventRepeatClick 是同步任务的防重复
- asyncPreventRepeatClick 是异步任务的防重复
```js
import { syncPreventRepeatClick, asyncPreventRepeatClick } from 'prevent-repeat-click'
```
### js
```js
<button id="button-sync">同步任务防重复测试</button>
<button id="button-async">异步任务防重复测试</button>

function syncSubmit() {
  console.log('同步提交成功')
}
function asyncSubmit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('异步提交成功')
      resolve()
    }, 3000)
  })
}
document.getElementById('button-sync').onclick = () => {
  syncPreventRepeatClick(syncSubmit)
}
document.getElementById('button-async').onclick = () => {
  asyncPreventRepeatClick(asyncSubmit)
}
```
### VUE
```js
// main.js
Vue.prototype.$syncPreventRepeatClick = syncPreventRepeatClick
Vue.prototype.$asyncPreventRepeatClick = asyncPreventRepeatClick
```
```html
<el-button @click="$syncPreventRepeatClick(syncSubmit)">同步任务防重复测试</el-button>
<el-button @click="$asyncPreventRepeatClick(asyncSubmit)">异步任务防重复测试</el-button>

methods: {
  syncSubmit () {
    console.log('同步提交成功')
  },
  asyncSubmit () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('异步提交成功')
        resolve()
      }, 3000)
    })
  },
}
```
### REACT
参考上面 js

## 参数说明
```
syncPreventRepeatClick(method_name, [delay], [params])
asyncPreventRepeatClick(method_name, [delay], [params])
```
| 参数名      | 说明                                              | 是否必填 | 类型   | 默认值 |
| ----------- | ------------------------------------------------- | -------- | ------ | ------ |
| method_name | 需要执行的函数名，注意异步函数需要返回一个promise | 是       | String | -      |
| delay       | 多少毫秒后可以下一次点击                          | 否       | Number | 500    |
| params      | 给函数传递的参数                                  | 否       | any    | -      |
## 测试
```js
http-server
```
访问：
http://localhost:8081/test/index

可以看到双击提交按钮，只会触发一次‘提交成功’

[github-url]: https://github.com/lvan-zhang/prevent-repeat-click

[npm-image]: https://img.shields.io/npm/v/prevent-repeat-click.svg
[npm-url]: https://www.npmjs.com/package/prevent-repeat-click
