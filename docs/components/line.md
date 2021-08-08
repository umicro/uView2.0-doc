## Line 线条 <to-api/>

<demo-model url="/pages/componentsB/line/index"></demo-model>

此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单。


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

组件内部有预置的参数，直接使用即可，有如下几个参数需要了解：

- `color`为线条的颜色
- `direction`为线条的方向，默认为横向
- `length`参数需要特别留意，它需要带上单位，比如设置为"50%"，"500rpx"等，在线条为横向时，表现为线条的长度；在线条为竖向时，表现为线条的高度。

```html
<template>
	/* 基础使用 */
	<u-line></u-line>
	
	/* 自定义颜色 */
	<u-line color="#2979ff"></u-line>
	
	/* 自定义线条方向 */
	<u-line direction="col"></u-line>
	
	/* 自定义线条长度 */
	<u-line length="50%"></u-line>
</template>
```


### 是否虚线 

- `dashed`控制线条是否虚线：

```html
<template>
	<u-line dashed></u-line>
</template>
```


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| color | 线条的颜色 | String | #d6d7d9 | - |
| length | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等 | String \| Number | 100% | - |
| direction | 线条的方向，`row`-横向，`col`-竖向 | String | row | col |
| hairline | 是否显示细边框 | Boolean | true | false |
| margin | 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"，默认单位px | String \| Number  | 0 | - |
| dashed | 是否虚线，false-实线，true-虚线 | Boolean  | false | true |


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 37%;
}
</style>