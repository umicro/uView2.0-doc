## Icon 图标 <to-api/>

<demo-model url="/pages/componentsA/icon/icon"></demo-model>


基于字体的图标集，包含了大多数常见场景的图标。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

<br>

:::tip 提示
如果您觉得内置的图标数量不够，或者不合符您的需求，别担心，我们还精心为您准备了一份简单易用的扩展自定义图标库教程：[扩展自定义图标库](https://www.uviewui.com/guide/customIcon.html)
:::

<br>

通过`<u-icon>`形式来调用，设置`name`参数为图标名即可。其中`color`默认为`#606266`，`size`默认为`16px`

```html
<u-icon name="photo"></u-icon>
```

### 修改图标的样式

- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为px

```html
<u-icon name="photo" color="#2979ff" size="28"></u-icon>
```

### 图片图标

这里说的图片图标，指的是小图标，起作用定位为"icon"图标作用，而非大尺寸的图片展示场景，理论上，这个小图标应该为`png`格式的正方形图标。

上面说到，给组件的`name`参数传入一个图片的名称即可显示字体图标，这些名称中不能带有`/`斜杠符号，否则会被认为是传入了图片图标，同时，`size`参数
也被设置为这个图片图标的宽度，由于是图片，诸如颜色`color`等参数都会失效。

```html
<u-icon label="uView" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></u-icon>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-border-left u-border-top u-page__grid">
			<view
			    @tap="selectIcon(item.name)"
			    class="u-page__grid__item u-border-bottom u-border-right"
			    v-for="(item, index) in iconList"
			    :key="index"
			>
				<view class="u-page__grid__item__icon">
					<u-icon
					    :name="item.name"
					    size="30"
					    color="#909399"
					></u-icon>
				</view>
				<text class="u-page__grid__item__text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
						name: 'level'
					},
					{
						name: 'woman'
					},
					{
						name: 'man'
					},
					{
						name: 'arrow-left-double'
					},
					{
						name: 'arrow-right-double'
					},
					{
						name: 'chat'
					},
					{
						name: 'chat-fill'
					},
					{
						name: 'red-packet'
					},
					{
						name: 'red-packet-fill'
					},
					{
						name: 'order'
					},
					{
						name: 'checkbox-mark'
					},
					{
						name: 'arrow-up-fill'
					},
					{
						name: 'arrow-down-fill'
					},
					{
						name: 'backspace'
					},
					{
						name: 'photo'
					},
					{
						name: 'photo-fill'
					},
					{
						name: 'lock'
					},
					{
						name: 'lock-fill'
					},
					{
						name: 'lock-open'
					},
					{
						name: 'lock-opened-fill'
					},
					{
						name: 'hourglass'
					},
					{
						name: 'hourglass-half-fill'
					},
					{
						name: 'home'
					},
					{
						name: 'home-fill'
					},
					{
						name: 'fingerprint'
					},
					{
						name: 'cut'
					},
					{
						name: 'star'
					},
					{
						name: 'star-fill'
					},
					{
						name: 'share'
					},
					{
						name: 'share-fill'
					},
					{
						name: 'volume'
					},
					{
						name: 'volume-fill'
					},
					{
						name: 'volume-off'
					},
					{
						name: 'volume-off-fill'
					},
					{
						name: 'trash'
					},
					{
						name: 'trash-fill'
					},
					{
						name: 'rewind-right'
					},
					{
						name: 'rewind-right-fill'
					},
					{
						name: 'rewind-left'
					},
					{
						name: 'rewind-left-fill'
					},
					{
						name: 'shopping-cart'
					},
					{
						name: 'shopping-cart-fill'
					},
					{
						name: 'question'
					},
					{
						name: 'question-circle'
					},
					{
						name: 'question-circle-fill'
					},
					{
						name: 'plus'
					},
					{
						name: 'plus-circle'
					},
					{
						name: 'plus-circle-fill'
					},
					{
						name: 'tags'
					},
					{
						name: 'tags-fill'
					},
					{
						name: 'pause'
					},
					{
						name: 'pause-circle'
					},
					{
						name: 'pause-circle-fill'
					},
					{
						name: 'play-circle'
					},
					{
						name: 'play-circle-fill'
					},
					{
						name: 'map'
					},
					{
						name: 'map-fill'
					},
					{
						name: 'phone'
					},
					{
						name: 'phone-fill'
					},
					{
						name: 'list'
					},
					{
						name: 'list-dot'
					},
					{
						name: 'man-delete'
					},
					{
						name: 'man-add'
					},
					{
						name: 'man-add-fill'
					},
					{
						name: 'person-delete-fill'
					},
					{
						name: 'info'
					},
					{
						name: 'info-circle'
					},
					{
						name: 'info-circle-fill'
					},
					{
						name: 'minus'
					},
					{
						name: 'minus-circle'
					},
					{
						name: 'minus-circle-fill'
					},
					{
						name: 'mic'
					},
					{
						name: 'mic-off'
					},
					{
						name: 'grid'
					},
					{
						name: 'grid-fill'
					},
					{
						name: 'eye'
					},
					{
						name: 'eye-fill'
					},
					{
						name: 'eye-off'
					},
					{
						name: 'file-text'
					},
					{
						name: 'file-text-fill'
					},
					{
						name: 'edit-pen'
					},
					{
						name: 'edit-pen-fill'
					},
					{
						name: 'email'
					},
					{
						name: 'email-fill'
					},
					{
						name: 'download'
					},
					{
						name: 'checkmark'
					},
					{
						name: 'checkmark-circle'
					},
					{
						name: 'checkmark-circle-fill'
					},
					{
						name: 'clock'
					},
					{
						name: 'clock-fill'
					},
					{
						name: 'close'
					},
					{
						name: 'close-circle'
					},
					{
						name: 'close-circle-fill'
					},
					{
						name: 'calendar'
					},
					{
						name: 'calendar-fill'
					},
					{
						name: 'car'
					},
					{
						name: 'car-fill'
					},
					{
						name: 'bell'
					},
					{
						name: 'bell-fill'
					},
					{
						name: 'bookmark'
					},
					{
						name: 'bookmark-fill'
					},
					{
						name: 'attach'
					},
					{
						name: 'play-right'
					},
					{
						name: 'play-right-fill'
					},
					{
						name: 'play-left'
					},
					{
						name: 'play-left-fill'
					},
					{
						name: 'error'
					},
					{
						name: 'error-circle'
					},
					{
						name: 'error-circle-fill'
					},
					{
						name: 'wifi'
					},
					{
						name: 'wifi-off'
					},
					{
						name: 'skip-back-left'
					},
					{
						name: 'skip-forward-right'
					},
					{
						name: 'search'
					},
					{
						name: 'setting'
					},
					{
						name: 'setting-fill'
					},
					{
						name: 'more-dot-fill'
					},
					{
						name: 'more-circle'
					},
					{
						name: 'more-circle-fill'
					},
					{
						name: 'bag'
					},
					{
						name: 'bag-fill'
					},
					{
						name: 'arrow-upward'
					},
					{
						name: 'arrow-downward'
					},
					{
						name: 'arrow-leftward'
					},
					{
						name: 'arrow-rightward'
					},
					{
						name: 'arrow-up'
					},
					{
						name: 'arrow-down'
					},
					{
						name: 'arrow-left'
					},
					{
						name: 'arrow-right'
					},
					{
						name: 'rmb'
					},
					{
						name: 'rmb-circle'
					},
					{
						name: 'rmb-circle-fill'
					},
					{
						name: 'thumb-up'
					},
					{
						name: 'thumb-up-fill'
					},
					{
						name: 'thumb-down'
					},
					{
						name: 'thumb-down-fill'
					},
					{
						name: 'coupon'
					},
					{
						name: 'coupon-fill'
					},
					{
						name: 'kefu-ermai'
					},
					{
						name: 'server-fill'
					},
					{
						name: 'server-man'
					},
					{
						name: 'scan'
					},
					{
						name: 'warning'
					},
					{
						name: 'warning-fill'
					},
					{
						name: 'google'
					},
					{
						name: 'google-circle-fill'
					},
					{
						name: 'chrome-circle-fill'
					},
					{
						name: 'ie'
					},
					{
						name: 'IE-circle-fill'
					},
					{
						name: 'github-circle-fill'
					},
					{
						name: 'android-fill'
					},
					{
						name: 'android-circle-fill'
					},
					{
						name: 'apple-fill'
					},
					{
						name: 'camera'
					},
					{
						name: 'camera-fill'
					},
					{
						name: 'pushpin'
					},
					{
						name: 'pushpin-fill'
					},
					{
						name: 'minus-square-fill'
					},
					{
						name: 'plus-square-fill'
					},
					{
						name: 'heart'
					},
					{
						name: 'heart-fill'
					},
					{
						name: 'reload'
					},
					{
						name: 'account'
					},
					{
						name: 'account-fill'
					},
					{
						name: 'minus-people-fill'
					},
					{
						name: 'plus-people-fill'
					},
					{
						name: 'integral'
					},
					{
						name: 'integral-fill'
					},
					{
						name: 'zhihu'
					},
					{
						name: 'zhihu-circle-fill'
					},
					{
						name: 'gift'
					},
					{
						name: 'gift-fill'
					},
					{
						name: 'zhifubao'
					},
					{
						name: 'zhifubao-circle-fill'
					},
					{
						name: 'weixin-fill'
					},
					{
						name: 'weixin-circle-fill'
					},
					{
						name: 'twitter'
					},
					{
						name: 'twitter-circle-fill'
					},
					{
						name: 'taobao'
					},
					{
						name: 'taobao-circle-fill'
					},
					{
						name: 'weibo'
					},
					{
						name: 'weibo-circle-fill'
					},
					{
						name: 'qq-fill'
					},
					{
						name: 'qq-circle-fill'
					},
					{
						name: 'moments'
					},
					{
						name: 'moments-circel-fill'
					},
					{
						name: 'qzone'
					},
					{
						name: 'qzone-circle-fill'
					},
					{
						name: 'facebook'
					},
					{
						name: 'facebook-circle-fill'
					},
					{
						name: 'baidu'
					},
					{
						name: 'baidu-circle-fill'
					},
					{
						name: 'share-square'
					},
				]
			};
		},
		methods: {
			selectIcon(name) {
				// #ifdef H5
				return uni.$u.toast('H5暂不支持复制');
				// #endif
				uni.setClipboardData({
					data: name,
					success: () => {

					}
				});
				uni.hideToast()
				uni.$u.toast('图标名称已复制');
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 15rpx;

		&__grid {
			@include flex(row);
			flex-wrap: wrap;

			&__item {
				@include flex(column);
				align-items: center;
				justify-content: center;
				height: 240rpx;
				width: 240rpx;
				padding: 0 5px;
				
				&__icon {
					height: 130rpx;
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					align-items: flex-end;
				}
				
				&__text {
					color: $u-tips-color;
					/* #ifndef APP-NVUE */
					word-wrap: break-word;
					word-break: break-all;
					/* #endif */
					font-size: 14px;
					height: 110rpx;
				}
			}
		}
	}
</style>

```
:::


### API

### Props

| 参数			| 说明																													| 类型					|  默认值					|  可选值				|
|:-				|:-																														|:-						|:-							|:-						|
| name			| 图标名称，见示例图标集，如名称带有`/`，会被认为是图片图标																	| String				| -							| -						|
| color			| 图标颜色																												| String				| color['u-content-color']	| -						|
| size			| 图标字体大小，单位默认px																									| String &#124; Number	| 16px						| -						|
| bold			| 是否显示粗体																											| Boolean				| false						| -						|
| index			| 一个用于区分多个图标的值，点击图标时通过`click`事件传出																		| String &#124; Number	| -							| -						|
| hoverClass	| 图标按下去的样式类，用法同uni的`view`组件的`hover-class`参数，详见：[hover-class](https://uniapp.dcloud.io/component/view)	| String				| -							| -						|
| customPrefix	| 自定义字体图标库时，需要写上此值，详见：[扩展自定义图标库](https://www.uviewui.com/guide/customIcon.html)					| String				| uicon						| -						|
| label			| 图标右侧/下方的label文字																								| String &#124; Number	| -							| -						|
| labelPos		| `label`相对于图标的位置																									| String				| right						| bottom / top / left	|
| labelSize		| `label`字体大小，单位默认px																								| String &#124; Number	| 15px						| -						|
| labelColor	| `label`字体颜色																										| String				| color['u-content-color']	| -						|
| space			| `label`与图标的距离，单位默认px																							| String &#124; Number	| 3px						| -						|
| imgMode		| 图片裁剪、缩放的模式，image组件原生属性，详见：[image](https://uniapp.dcloud.io/component/image?id=image)					| String				| -							| -						|
| width			| `name`为图片路径时图片的宽度，单位默认px																					| String &#124; Number	| -							| -						|
| height		| `name`为图片路径时图片的高度，单位默认px																					| String &#124; Number	| -							| -						|
| top			| 图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px												| String &#124; Number	| 0							| -						|
| stop			| 是否阻止事件传播																										| Boolean				| false						| -						|

### Events

|事件名	|说明			|回调参数							|版本	|
|:-		|:-				|:-									|:-		|
|click	|点击图标时触发	|index: 通过`props`传递的`index`值	|-		|

### 图标集

<icon />

