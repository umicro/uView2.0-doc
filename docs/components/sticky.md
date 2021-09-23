## Sticky 吸顶 <to-api/>

<demo-model url="/pages/componentsA/sticky/sticky"></demo-model>


该组件与CSS中`position: sticky`属性实现的效果一致，当组件达到预设的到顶部距离时，
就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

:::tip 说明
本组件内部通过多种手段嗅探当前运行环境是否支持`css sticky`，在`H5`，`APP-VUE`，`NVUE`，`MP-WEIIXN`，`安卓`
等环境可以进行准确判断，如果支持则使用`CSS`方案，否则使用降级的`JS`方案。
:::

### 基本使用

由于`css sticky`的特殊性，建议您将此组件放置在页面外层元素中，否则可能会导致`sticky`失效，以下为[MDN对sticky的解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)：  
- 元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。

```html
<template>
	<view class="container">
		<!-- 建议放在外层 -->
		<u-sticky>......</u-sticky>
		<view class="container__inner">
			<!-- 不建议放在层层嵌套的view中，除非您清楚知道自己为什么需要这么做 -->
			<u-sticky>......</u-sticky>
		</view>
	</view>
</template>
```

### 吸顶距离

通过`offset-top`参数设置组件在吸顶时与顶部的距离

```html
<u-sticky offset-top="200">
	<text>塞下秋来风景异，衡阳雁去无留意</text>
</u-sticky>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<!-- <u-navbar
			title="吸顶"
			@leftClick="navigateBack"
			safeAreaInsetTop
			fixed
			placeholder
		></u-navbar> -->
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础使用</text>
			<u--text
				type="content"
				text="滚动页面,即可看到下方的按钮会吸顶,目前由于nvue的bug,设置sticky的top值无效"
			></u--text>
		</view>
		<u-sticky>
			<u-button
				text="吸顶按钮"
				type="success"
			></u-button>
		</u-sticky>
		<u-gap
			bgColor="#fff"
			height="1500px"
		></u-gap>
		<u-divider textColor="#2979ff" lineColor="#2979ff" text="已到底部"></u-divider>
	</view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        // 复制代码之后解开下面注释
        // mixins: [uni.$u.mixin],
        methods: {
            navigateBack() {
                // 复制代码之后解开下面注释
                // uni.navigateBack()
            }
        }
    }
</script>

<style lang="scss">
    .u-page {

    }
</style>
```
:::

### API

### Props

| 参数				| 说明									| 类型					| 默认值		|  可选值	|
|:-					|:-										|:-						|:-			|:-			|
| offsetTop			| 吸顶时与顶部的距离，单位rpx				| String &#124; Number	| 0			| -			|
| customNavHeight	| 导航栏高度，自定义导航栏时，需要传入此值	| String &#124; Number	| 0			| -			|
| disabled			| 是否禁用吸顶功能						| Boolean				| false		| true		|
| bgColor			| 组件背景颜色							| String				| #ffffff	| -			|
| zIndex			| 吸顶时的`z-index`值，`NVUE`无效			| String &#124; Number	| -			| -			|
| index				| 自定义标识，用于区分是哪一个组件			| String &#124; Number	| -			| -			|

