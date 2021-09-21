## LoadingPage 加载页 <to-api/>

<demo-model url="/pages/componentsA/loading-page/loading-page"></demo-model>

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

```html
<template>
	<view>
		<u-loading-page></u-loading-page>
	</view>
</template>
```

### 显示或隐藏

`loading`可以指定是否显示加载页

```html
<u-loading-page :loading="true"></u-loading-page>
```

### 文字内容

`loading-text`可以指定提示内容

```html
<u-loading-page loading-text="loading..."></u-loading-page>
```

### 动画模式

`loading-mode`可以指定加载动画的模式, 默认为`circle`

```html
<u-loading-page loading-mode="spinner"></u-loading-page>
<u-loading-page loading-mode="semicircle"></u-loading-page>
```

### 动画图片

`image`可以指定文字上方用于替换loading动画的图片

```html
<u-loading-page image="/static/logo.png"></u-loading-page>
```

### 文字颜色

`color`可以指定文字颜色

```html
<u-loading-page color="#666"></u-loading-page>
```

### 文字大小

`font-size`可以指定文字大小

```html
<u-loading-page font-size="24"></u-loading-page>
```

### 背景颜色

`bg-color`可以指定文字大小

```html
<u-loading-page bg-color="#e8e8e8"></u-loading-page>
```

### 背景颜色

`loading-color`可以指定加载中图标的颜色

```html
<u-loading-page loading-color="#000000"></u-loading-page>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<u-navbar
			title="加载页"
			@leftClick="navigateBack"
			safeAreaInsetTop
			fixed
			placeholder
		></u-navbar>
		<u-gap
		    bgColor="#fff"
		    height="20"
		></u-gap>
		<u-cell-group>
			<u-cell
			    :titleStyle="{fontWeight: 500}"
			    @click="openLoadingPage(index)"
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
		</u-cell-group>
		<u-loading-page
		    :loadingText="loadingPageData.loadingText"
		    :image="loadingPageData.image"
		    :loadingMode="loadingPageData.loadingMode"
		    :bgColor="loadingPageData.bgColor"
		    :loading="loading"
		    :color="loadingPageData.color"
		    :loadingColor="loadingPageData.loadingColor"
		>
		</u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				loadingPageData: {
					// 自定义提示内容
					loadingText: '',
					// 自定义图片
					image: '',
					// 自定义加载动画模式
					loadingMode: '',
					// 自定义背景色
					bgColor: '#ffffff',
				},
				list: [{
						title: '自定义提示内容',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/loading-page/promptContent.png',
					},
					{
						title: '自定义图片',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/loading-page/customPicture.png',
					},
					{
						title: '自定义加载动画模式',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/loading-page/customMode.png',
					},
					{
						title: '自定义背景色',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/loading-page/customBgColor.png',

					},
				]
			}
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			openLoadingPage(indexNum) {
				this.loadingPageData = {
					loadingText: '',
					image: '',
					loadingMode: '',
					bgColor: '#ffffff',
				}
				if (indexNum == 0) {
					//自定义提示内容
					this.loadingPageData.loadingMode = 'semicircle'
					this.loadingPageData.loadingText = "Hello uView"
					this.loadingPageData.color = '#C8C8C8',
						this.loadingPageData.loadingColor = '#C8C8C8'
				} else if (indexNum == 1) {
					// 自定义图片
					this.loadingPageData.image =
						"/static/uview/common/logo.png"
					this.loadingPageData.loadingText = "uView UI"
					this.loadingPageData.color = '#C8C8C8',
						this.loadingPageData.loadingColor = '#C8C8C8'
				} else if (indexNum == 2) {
					// 自定义加载动画模式
					this.loadingPageData.loadingMode = 'circle'
					this.loadingPageData.loadingText = "uView UI"
					this.loadingPageData.color = '#C8C8C8',
						this.loadingPageData.loadingColor = '#C8C8C8'
				} else if (indexNum == 3) {
					// 自定义背景色
					this.loadingPageData.loadingMode = 'spinner'
					this.loadingPageData.bgColor = 'rgba(0, 0, 0, 0.3)'
					this.loadingPageData.loadingText = "uView UI"
					this.loadingPageData.color = '#eee',
						this.loadingPageData.loadingColor = '#ddd'
				}
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 2000)
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}
</style>

```
:::

### API

### Props

| 参数			| 说明								| 类型					| 默认值		| 可选值					|
| :-			| :-								| :-					| :-		| :-					|
| loadingText	| 提示内容							| String &#124; Number	| 正在加载	| -						|
| image			| 文字上方用于替换loading动画的图片	| String				| -			| -						|
| loadingMode	| 加载动画的模式						| String				| circle	| spinner \ semicircle	|
| loading		| 是否加载中							| boolean				| false		| true					|
| bgColor		| 背景颜色							| String				| #ffffff	| -						|
| color			| 文字颜色							| String				| #C8C8C8	| -						|
| fontSize		| 文字大小							| String &#124; Number	| 19		| -						|
| loadingColor	| 加载中图标的颜色					| String				| #C8C8C8	| -						|



