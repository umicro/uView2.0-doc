## Gap 间隔槽 <to-api/>

<demo-model url="/pages/componentsA/gap/gap"></demo-model>


该组件一般用于内容块之间的用一个灰色块隔开的场景，方便用户风格统一，减少工作量

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

直接引入即可使用
- 通过`height`配置高度，单位px
- 通过`bgColor`配置背景颜色

```html
<u-gap height="80" bgColor="#bbb"></u-gap>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案列</text>
			<view class="u-page__gap-item">
				<u-gap></u-gap>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-page__gap-item">
				<u-gap bgColor="#2979ff"></u-gap>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义高度</text>
			<view class="u-page__gap-item">
				<u-gap height="40"></u-gap>
			</view>
		</view>	
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义上下边距</text>
			<view class="u-page__gap-item">
			<u-gap
			    marginTop="20"
			    marginBottom="20"
			></u-gap>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">

</style>

```
:::

### API

### Props

| 参数			| 说明						| 类型					| 默认值					| 可选值		|
|:-				|:-							|:-						|:-						|:-			|
| bgColor		| 背景颜色					| String				| transparent(背景透明)	| -			|
| height		| 间隔槽高度，单位px		| String &#124; Number	| 20					| -			|
| marginTop		| 与前一个元素的距离，单位px	| String &#124; Number	| 0						| -			|
| marginBottom	| 与后一个元素的距离，单位px	| String &#124; Number	| 0						| -			|
