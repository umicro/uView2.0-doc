## NoticeBar 滚动通知 <to-api/>

<demo-model url="/pages/componentsB/noticeBar/noticeBar"></demo-model>


该组件用于滚动通告场景，有多种模式可供选择

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`list`数组参数设置需要滚动的内容
- 滚动`direction`参数有两种模式，分别是`row`水平滚动，`column`垂直滚动。其中水平滚动又可以通过`step`来配置是否使用步进形式滚动，
衔接滚动滚动会把`list`数组元素拼接成一个字符串形式进行滚动，步进滚动模式类似轮播图水平滚动的形式，具体效果请见实例

```html
<template>
	<view>
		<u-notice-bar direction="row" :text="list"></u-notice-bar>
		<u-notice-bar direction="column" :text="list"></u-notice-bar>
        <u-notice-bar direction="row" :text="list" :step="true"></u-notice-bar>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				]
			}
		}
	}
</script>
```

### 配置图标

- `volume-icon`参数配置是否显示左侧的音量小喇叭图标，默认显示
- `more-icon`配置是否显示右侧的向右箭头，默认关闭
- `close-icon`配置是否显示关闭的图标，默认关闭

```html
<u-notice-bar text="uView 2.0来了" :volume-icon="false"></u-notice-bar>

<u-notice-bar text="uView 2.0来了" :more-icon="true"></u-notice-bar>

<u-notice-bar text="uView 2.0来了" mode="closable"></u-notice-bar>
```

### 配置滚动速度和跳转

- `speed`可配置横向滚动速度
- `url`可配置跳转

```html
<u-notice-bar speed="250" :text="list"></u-notice-bar>

<u-notice-bar :is-circular="false" url="/pages/componentsB/tag/tag" :list="list"></u-notice-bar>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text1"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可关闭</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text5"
					mode="closable"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义横向滚动速度</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text2"
					speed="250"
					mode="closable"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可跳转(点击右箭头)</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text3"
					mode="link"
					url="/pages/componentsB/tag/tag"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向步进滚动</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text4"
					:step="true"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">纵向滚动</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text4"
					direction="column"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义样式</text>
			<view class="u-demo-block__content">
				<u-notice-bar
				    :text="text1"
					color="#ffffff"
					bgColor="#f56c6c"
				></u-notice-bar>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
				text2: 'uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨',
				text3: 'uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍',
				text4: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				text5: '涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川'
			}
		},
		onLoad() {
			
		},
		methods: {
			click() {
				
			}
		},
	}
</script>

<style lang="scss">
	.u-demo-block__content {
		@include flex;
	}
</style>

```
:::

### API

### Props

| 参数			| 说明																						| 类型					| 默认值		|  可选值			|
|:-				|:-																							|:-						|:-			|:-					|
| text			| 显示的内容，数组																			| Array &#124;  String	| -			| -					|
| direction		| 通告滚动模式，row-横向滚动，column-竖向滚动													| String				| row		| column			|
| step			| direction = row时，是否使用步进形式滚动														| Boolean				| false		| true				|
| icon			| 是否显示左侧的音量图标																		| String				| volume	| -					|
| mode			| 通告模式，link-显示右箭头，closable-显示右侧关闭图标											| String				| -			| link / closable	|
| color			| 文字颜色																					| String				| #f9ae3d	| -					|
| bgColor		| 背景颜色																					| String				| #fdf6ec	| -					|
| speed			| 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度		| String &#124; Number	| 80		| -					|
| fontSize		| 字体大小																					| String &#124; Number	| 14		| -					|
| duration		| 滚动一个周期的时间长，单位ms																	| String &#124; Number	| 2000		| -					|
| disableTouch	| 是否禁止用手滑动切换（目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序）	| Boolean				| true		| false				|
| url			| 跳转的页面路径																				| String				| -			| -					|
| linkType		| 页面跳转的类型																				| String				| navigateTo| -					|


### Events

详细解释见上方说明

| 事件名| 说明					| 回调参数	| 版本	|
| :-	| :-					| :-		| :-	|
| click	| 点击通告文字触发		| -			|-		|
| close	| 点击右侧关闭图标触发	| -			| -		|
