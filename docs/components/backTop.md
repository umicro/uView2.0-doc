## BackTop 返回顶部 <to-api/>

<demo-model url="/pages/componentsA/backtop/backtop"></demo-model>


该组件一个用于长页面，滑动一定距离后，出现返回顶部按钮，方便快速返回顶部的场景。


### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用

由于返回顶部需要实时监听滚动条的位置，从而判断返回的按钮该出现还是隐藏，由于组件无法得知页面的滚动条信息，只能在**页面**的`onPageScroll`生命周期
中获得滚动条的位置，故需要在页面监听`onPageScroll`生命周期，实时获得滚动条的位置，通过Props传递给组件。

```html
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```


### 改变返回顶部按钮的出现时机

可以通过`top`参数，修改页面滚动多少距离时，出现返回顶部的按钮

```html
<u-back-top :scroll-top="scrollTop" top="600"></u-back-top>
```


### 自定义返回顶部的图标和提示

- 通过`icon`修改返回顶部按钮的图标，可以是uView内置的图标，或者图片路径
- 通过`text`参数修改返回顶部按钮的文字提示信息，如果需要修改文字的颜色和大小，可以通过`customStyle`参数

```html
<u-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></u-back-top>
```


### 其他自定义样式

- 通过`iconStyle`参数自定义图标的样式，比如颜色，大小等
- 通过`customStyle`修改返回按钮的背景颜色，大小等
- 通过`mode`修改按钮的形状，`circle`为圆形，`square`为方形

注意：如果通过`icon`参数传入图片路径的话，需要通过`iconStyle`参数设置图片的`width`和`height`属性

```html
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<u-back-top :scrollTop="scrollTop" :mode="mode" :iconStyle="iconStyle"></u-back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			mode: 'square',
			iconStyle: {
				fontSize: '32rpx',
				color: '#2979ff'
			}
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/backtop/backtop.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/backtop/backtop.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数			| 说明											| 类型					| 默认值		|  可选值	|
|:-				|:-												|:-						|:-				|:-			|
| mode			| 按钮形状										| String				| circle		| square	|
| icon			| uView内置图标名称，或图片路径					| String				| arrow-upward	| -			|
| text			| 返回顶部按钮的提示文字							| String				| -				| -			|
| duration		| 返回顶部过程中的过渡时间，单位ms					| String &#124; Number	| 100			| -			|
| scrollTop		| 页面的滚动距离，通过`onPageScroll`生命周期获取	| String &#124; Number	| 0				| -			|
| top			| 滚动条滑动多少距离时显示，单位rpx					| String &#124; Number	| 400			| -			|
| bottom		| 返回按钮位置到屏幕底部的距离，单位rpx				| String &#124; Number	| 100			| -			|
| right			| 返回按钮位置到屏幕右边的距离，单位rpx				| String &#124; Number	| 20			| -			|
| z-index		| 返回顶部按钮的层级								| String &#124; Number	| 9				| -			|
| iconStyle		| 图标的样式，对象形式							| Object				| -				| -			|
| customStyle	| 按钮外层的自定义样式							| Object				| -				| -			|




### Slot

|名称	|说明						|
|:-		|:-							|
| -		| 自定义返回按钮的所有内容		|



<style scoped>
h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
