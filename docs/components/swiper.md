## Swiper 轮播图 <to-api/>

<demo-model url="/pages/componentsB/swiper/index"></demo-model>



该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
- 自定义指示器模式，可配置指示器样式
- 3D轮播图效果，满足不同的开发需求
- 可配置显示标题，涵盖不同的应用场景
- 具有设置加载状态和嵌入视频的能力，功能齐全丰富


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：
```html
<u-swiper
	:list="list1"
	@change="change"
	@click="click"
></u-swiper>
list1: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
],
```

### 带标题

添加`showTitle`属性以展示标题，此时`list`的参数应为一个对象：例如：
<br/>
（请注意：您期望使用对象作为参数时，需要配置`u-swiper`组件的`keyName`参数为`您当前对象的图片key`值）如：`keyName="image"`

```html
<u-swiper
	:list="list2"
	keyName="image"
	showTitle
	:autoplay="false"
	circular
></u-swiper>
list2: [{
		image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
		title: '昨夜星辰昨夜风，画楼西畔桂堂东',
	},
	{
		image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
		title: '身无彩凤双飞翼，心有灵犀一点通'
	},
	{
		image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
		title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
	}
],
```
### 带指示器

通过`indicator`属性添加指示器，例如：

```html
<u-swiper
	:list="list3"
	indicator
	indicatorMode="line"
	circular
></u-swiper>
list3: [
	'https://cdn.uviewui.com/uview/swiper/swiper3.png',
	'https://cdn.uviewui.com/uview/swiper/swiper2.png',
	'https://cdn.uviewui.com/uview/swiper/swiper1.png',
],
```
### 加载中

通过添加`loading`属性达到加载中的状态，例如：
<br/>
您也可以动态的来控制加载状态，比如：`:loading='loading'`
```html
<u-swiper
	:list="list3"
	loading
></u-swiper>
list3: [
	'https://cdn.uviewui.com/uview/swiper/swiper3.png',
	'https://cdn.uviewui.com/uview/swiper/swiper2.png',
	'https://cdn.uviewui.com/uview/swiper/swiper1.png',
],
```
### 嵌入视频

我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置`poster`指定视频封面，案例如下：

```html
<u-swiper
	:list="list4"
	keyName="url"
	:autoplay="false"
></u-swiper>
list4: [{
		url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
		title: '昨夜星辰昨夜风，画楼西畔桂堂东',
		poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
	},
	{
		url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
		title: '身无彩凤双飞翼，心有灵犀一点通'
	},
	{
		url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
		title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
	}
],
```
### 自定义指示器

如您需要以指示点或数字形式来自定义指示器，请参考如下案例：

```html
<u-swiper
	:list="list5"
	@change="e => current = e.current"
	:autoplay="false"
>
	<view
		slot="indicator"
		class="indicator"
	>
		<view
			class="indicator__dot"
			v-for="(item, index) in list5"
			:key="index"
			:class="[index === current && 'indicator__dot--active']"
		>
		</view>
	</view>
</u-swiper>
list5: [
	'https://cdn.uviewui.com/uview/swiper/swiper3.png',
	'https://cdn.uviewui.com/uview/swiper/swiper2.png',
	'https://cdn.uviewui.com/uview/swiper/swiper1.png',
],
<u-swiper
	:list="list6"
	@change="e => currentNum = e.current"
	:autoplay="false"
	indicatorStyle="right: 20px"
>
	<view
		slot="indicator"
		class="indicator-num"
	>
		<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
	</view>
</u-swiper>

list6: [
	'https://cdn.uviewui.com/uview/swiper/swiper2.png',
	'https://cdn.uviewui.com/uview/swiper/swiper3.png',
	'https://cdn.uviewui.com/uview/swiper/swiper1.png',
]
```
### 卡片式轮播

在实际开发中，普通的轮播或许不能满足您的开发需求，`swiper`组件提供了卡片式轮播的api，您可以参考以下案例实现此功能
```html
<!-- #ifndef APP-NVUE || MP-TOUTIAO -->
	<view class="u-demo-block">
		<text class="u-demo-block__title">卡片式</text>
		<u-swiper
			:list="list3"
			previousMargin="30"
			nextMargin="30"
			circular
			:autoplay="false"
			radius="5"
			bgColor="#ffffff"
		></u-swiper>
	</view>
<!-- #endif -->
```



### 控制轮播效果

- `autoplay`-是否自动轮播，默认为`true`
- `interval`-前后两张图自动轮播的时间间隔
- `duration`-切换一张轮播图所需的时间
- `circular`-是否衔接滑动，即到最后一张时，是否可以直接转到第一张

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 轮播图数据，见上方"基本使用"说明 | Array | - | - |
| showTitle | 是否显示标题文字，需要配合`list`参数，见上方说明 | Boolean  | false | true |
| height | 轮播图组件高度，单位rpx | String \| Number  | 250 | - |
| autoplay | 是否自动播放 | Boolean  | true | false |
| interval | 自动轮播时间间隔，单位ms | String \| Number  | 2500 | - |
| circular | 是否衔接播放，见上方说明 | Boolean  | true | false |
| duration | 切换一张轮播图所需的时间，单位ms | String \| Number  | 500 | - |
| keyName | 组件内部读取的`list`参数中的属性名，见上方说明 | string  | image | - |
| current | 初始化时，默认显示第几项 | String \| Number  | 0 | - |


### Events

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| click | 点击轮播图时触发 | index：点击了第几张图片，从0开始 |
| change | 轮播图切换时触发(自动或者手动切换) | index：切换到了第几张图片，从0开始 |
