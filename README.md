# [prevent-repeat-click.js][github-url]  [![NPM Version][npm-image]][npm-url]
## 简介
`prevent-repeat-click` 是一个按钮防重复点击的一个小工具。
## 安装
```js
npm install prevent-repeat-click --save
```
## 使用
可以在任何 js 环境使用
### js
```js
import preventRepeatClick from '../index.js'
function submit() {
  console.log('提交成功')
}
document.getElementById('button').onclick = () => {
  preventRepeatClick(submit)
}
```
### VUE
```js
import preventRepeatClick from 'prevent-repeat-click'
// main.js
Vue.prototype.$preventRepeatClick = preventRepeatClick
```
```html
<el-button @click="$preventRepeatClick(submit)">确定</el-button>

methods: {
  submit () {
    console.log('提交成功')
  }
}
```
### REACT
参考上面 js

## 参数说明
```
preventRepeatClick(method_name, [delay], [params])
```
| 参数名      | 说明                     | 是否必填 | 类型   | 默认值 |
| ----------- | ------------------------ | -------- | ------ | ------ |
| method_name | 需要执行的函数名         | 是       | String | -      |
| delay       | 多少毫秒后可以下一次点击 | 否       | Number | 500    |
| params      | 给函数传递的参数         | 否       | any    | -      |
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
