## List 列表

<demo-model url="/pages/componentsC/list/list"></demo-model>


该组件为高性能列表组件


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 配合组件`u-list-item`嵌套使用
- 参数`show-scrollbar`是否出现滚动条仅在nvue中有效
- 事件`@scrolltolower`滚动到底部触发事件

```html
<template>
	<view class="u-page">
		<u-list
			@scrolltolower="scrolltolower"
		>
			<u-list-item
				v-for="(item, index) in indexList"
				:key="index"
			>
				<u-cell
					:title="`列表长度-${index + 1}`"
				>
					<u-avatar
						slot="icon"
						shape="square"
						size="35"
						:src="item.url"
						customStyle="margin: -3px 5px -3px 0"
					></u-avatar>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [],
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				]
			}
		},
		onLoad() {
			this.loadmore()
		},
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			}
		},
	}
</script>
```


### API

### List Props

| 参数					| 说明																											| 类型					| 默认值	|  可选值	|
|:-						|:-																												|:-						|:-		|:-			|
| showScrollbar			| 控制是否出现滚动条，仅nvue有效																					| Boolean				| false	| true		|
| lowerThreshold		| 距底部多少时触发scrolltolower事件																				| String &#124; Number	| 50	| -			|
| upperThreshold		| 距顶部多少时触发scrolltoupper事件，非nvue有效																	| String &#124; Number	| 0		| -			|
| scrollTop				| 设置竖向滚动条位置																								| String &#124; Number	| 0		| -			|
| offsetAccuracy		| 控制 onscroll 事件触发的频率，仅nvue有效																			| String &#124; Number	| 10	| -			|
| enableFlex			| 启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效		| Boolean				| false	| -			|
| pagingEnabled			| 是否按分页模式显示List，默认值false																				| Boolean				| false	| -			|
| scrollable			| 是否允许List滚动																								| Boolean				| true	| -			|
| scrollIntoView		| 值应为某子元素id（id不能以数字开头）																				| String				| -		| -			|
| scrollWithAnimation	| 在设置滚动条位置时使用动画过渡																					| Boolean				| false	| -			|
| enableBackToTop		| iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效												| Boolean				| false	| -			|
| height				| 列表的高度																										| String &#124; Number	| 0		| -			|
| width					| 列表宽度																										| String &#124; Number	| 0		| -			|
| preLoadScreen			| 列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度														| String &#124; Number	| 1		| -			|


### List Events

|事件名			|说明				|回调参数				|
|:-				|:-					|:-						|
| scroll		| 滚动条滚动触发事件	| scrollTop: 滚动条位置	|
| scrolltolower	| 滚动到底部触发事件	| -						|


### ListItem Props

| 参数	| 说明				| 类型					| 默认值	|  可选值	|
|:-		|:-					|:-						|:-		|:-			|
| anchor| 用于滚动到指定item	| String &#124; Number	| -		| -			|
