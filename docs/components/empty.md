## Empty 内容为空 <to-api/>

<demo-model url="/pages/componentsA/empty/empty"></demo-model>


该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景，
我们精心挑选了十几个场景的图标，方便您使用。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

:::tip 提示
我们的专业设计师精心为您准备了一套精美默认图，带有图片和`Sketch`文件，您可以下载或修改后再使用：[资源下载](/components/resource.html)
:::

- 通过`text`参数配置提示的文字内容
- 通过`mode`(默认为`data`)参数配置要显示的图标

```html
<u-empty
        mode="car"
        icon="http://cdn.uviewui.com/uview/empty/car.png"
>
</u-empty>
```

### 内置图标

这些图标已内置，直接通过`mode`参数引用即可

| 名称		| 说明					|
|:-			|:-						|
| car		| 购物车为空				|
| page		| 页面不存在				|
| search	| 没有搜索结果			|
| address	| 没有收货地址			|
| wifi		| 没有WiFi				|
| order		| 订单为空				|
| coupon	| 没有优惠券				|
| favor		| 无收藏					|
| permission| 无权限					|
| history	| 无历史记录				|
| news		| 无新闻列表				|
| message	| 消息列表为空			|
| list		| 列表为空(通用)			|
| data		| 数据为空(默认，通用)	|

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-page__top-box">
			<text class="u-demo-block__title">演示效果</text>
		</view>
		<u-empty
			:mode="mode"
			:icon="imgList[mode]"
		>
			<u-button
				size="small"
				type="primary"
				:style="{marginTop:10+'px'}"
				v-if="mode=='car'"
				text="查看更多商品"
			>
			</u-button>
		</u-empty>
		<div class="empty-select">
			<u-cell
				:titleStyle="{fontWeight: 500}"
				@click="openImg(item.imgName)"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
			>
				<image
					slot="icon"
					class="u-cell-icon"
					:src="item.iconUrl"
					mode="widthFix"
				></image>
			</u-cell>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			// 如果使用这些图片，请勿直接引入cdn.uviewui.com的资源，因为此资源路径随时会有变动
			// 变动后，您将会访问图片失败，如有需要，您可以将这些图片上传到自己的oss或者服务器再使用
			const baseUrl = 'http://cdn.uviewui.com/uview/empty/'
			return {
				mode: 'car',
				imgList: {
					car: baseUrl + 'car.png',
					address: baseUrl + 'address.png',
					comment: baseUrl + 'comment.png',
					coupon: baseUrl + 'coupon.png',
					data: baseUrl + 'data.png',
					history: baseUrl + 'history.png',
					list: baseUrl + 'list.png',
					message: baseUrl + 'message.png',
					news: baseUrl + 'news.png',
					order: baseUrl + 'order.png',
					page: baseUrl + 'page.png',
					permission: baseUrl + 'permission.png',
					search: baseUrl + 'search.png',
					wifi: baseUrl + 'wifi.png',
				},
				list: [{
						imgName: 'car',
						title: '购物车为空(同时传入slot)',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/car.png'
					},
					{
						imgName: 'data',
						title: '数据为空',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/data.png'
					}, {
						imgName: 'comment',
						title: '评论为空',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/comment.png'
					}, {
						imgName: 'coupon',
						title: '没有优惠券',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/coupon.png'
					}, {
						imgName: 'history',
						title: '无历史记录',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/history.png'
					}, {
						imgName: 'list',
						title: '列表为空',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/list.png'
					}, {
						imgName: 'message',
						title: '消息列表为空',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/message.png'
					}, {
						imgName: 'news',
						title: '无新闻列表',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/news.png'
					}, {
						imgName: 'order',
						title: '订单为空',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/order.png'
					}, {
						imgName: 'page',
						title: '页面不存在',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/page.png'
					}, {
						imgName: 'permission',
						title: '无权限',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/permission.png'
					}, {
						imgName: 'search',
						title: '没有搜索结果',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/search.png'
					}, {
						imgName: 'wifi',
						title: '没有WiFi',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/empty/wifi.png'
					},
				]

			}
		},
		methods: {
			//点击改变图片
			openImg(imgName) {
				// this.mode = this.imgList[imgName]
				this.mode = imgName;
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 40rpx 0px;

		&__top-box {
			padding-left: 40rpx;
		}
	}

	.empty-select {
		margin-top: 10px;
	}
</style>

```
:::

### API

### Props

| 参数		| 说明									| 类型					| 默认值		|  可选值	|
|:-			|:-										|:-						|:-			|:-			|
| icon		| 内置图标名称，或图片路径，建议绝对路径	| String				| -			| -			|
| text		| 文字提示								| String				| -			| -			|
| textColor	| 文字颜色								| String				| #c0c4cc	| -			|
| textSize	| 文字大小								| String &#124; Number	| 14		| -			|
| iconColor	| 图标的颜色								| String				| #c0c4cc	| -			|
| iconSize	| 图标的大小								| String &#124; Number	| 90		| -			|
| mode		| 内置的图标，见上方说明					| String				| data		| -			|
| width		| 图标的宽度，单位px						| String &#124; Number	| 160		| -			|
| height	| 图标的高度，单位px						| String &#124; Number	| 160		| -			|
| show		| 是否显示组件							| Boolean				| true		| false		|
| marginTop	| 组件到上一个元素的间距,单位px			| String &#124; Number	| 0			| -			|



### Slot

| 名称          | 说明            |
|-------------  |---------------- |
| - |  给组件底部传入`slot`内容  |


<style scoped>
h3[id=内置图标] + p + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
