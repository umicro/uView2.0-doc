## NoticeBar 滚动通知 <to-api/>

<demo-model url="/pages/componentsB/noticeBar/noticeBar"></demo-model>


该组件用于滚动通告场景，有多种模式可供选择

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`text`参数设置需要滚动的内容

```html
<template>
	<view>
      <u-notice-bar :text="text1"></u-notice-bar>
    </view>
</template>

<script>
	export default {
		data() {
			return {
              text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
			}
		}
	}
</script>
```

### 可关闭

通过`mode`配置为`closable`让右侧显示关闭按钮

```html
<template>
  <view>
    <u-notice-bar :text="text1" mode="closable"></u-notice-bar>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
      }
    }
  }
</script>
```

### 配置滚动速度和跳转

- `speed`可配置横向滚动速度
- `url`可配置跳转

```html
<template>
  <view>
    <u-notice-bar :text="text1" mode="closable" speed="250" url="/pages/componentsB/tag/tag"></u-notice-bar>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
      }
    }
  }
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/noticeBar/noticeBar.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/noticeBar/noticeBar.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数			| 说明																						| 类型					| 默认值		|  可选值			|
|:-				|:-																							|:-						|:-			|:-					|
| text			| 显示的内容，数组									    										| Array &#124;  String	| -			| -					|
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
