## NoticeBar 滚动通知 <to-api/>

<demo-model url="/pages/componentsB/noticeBar/index"></demo-model>


该组件用于滚动通告场景，有多种模式可供选择

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

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

### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| text | 显示的内容，数组 | Array / String | - | - |
| direction | 通告滚动模式，row-横向滚动，column-竖向滚动  | String | row | column |
| step | direction = row时，是否使用步进形式滚动 | Boolean | false | true |
| icon | 是否显示左侧的音量图标 | String | volume | - |
| mode | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | String | - | link / closable |
| color | 文字颜色 | String | - | #f9ae3d |
| bg-color | 背景颜色 | String | #fdf6ec | - |
| speed | 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度 | Number / String | 80 | - |
| fontSize | 字体大小 | Number / String | 14 | - |
| duration | 滚动一个周期的时间长，单位ms | Number / String | 2000 | - |
| disableTouch | 是否禁止用手滑动切换（目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序） | Boolean | true | false |
| url | 跳转的页面路径 | String | - | - |
| linkType | 页面跳转的类型 | String | navigateTo | - |


### Events

详细解释见上方说明

| 事件名 | 说明 | 回调参数 | 版本 |
| :- | :- | :- | :- |
| click | 点击通告文字触发 | - |
| close | 点击右侧关闭图标触发 | - | - |
