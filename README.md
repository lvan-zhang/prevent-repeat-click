## 简介
`prevent-repeat-click` 是一个按钮防重复点击的一个小工具。
## 安装
```js
npm install prevent-repeat-click --save
```
## 使用
```js
import preventRepeatClick from 'prevent-repeat-click'
```
### VUE
```js
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