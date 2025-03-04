## ActionSheet 操作菜单 <to-api/>

<demo-model url="/pages/componentsB/actionSheet/actionSheet"></demo-model>

本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。  
本组件功能类似于uni的`uni.showActionSheet`API，配置更加灵活，所有平台都表现一致。

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用

- 通过`title`(设置标题)，`cancelText`(取消按钮的文字，不为空时显示按钮)，`description`(选项上方的描述信息)
- 通过`actions`设置需要显示的菜单，该值为一个数组，元素为对象，对象至少要提供`name`属性，另外可选的有`subname`(描述)，`disabled`(是否禁用)，`loading`(加载动画)，
`color`(字体颜色)，`fontSize`(字体大小)，
- 通过`show`绑定一个值为布尔值的变量控制组件的弹出与收起，`show`的值是双向绑定的

```html
<template>
	<view>
		<u-action-sheet :actions="list" :title="title" :show="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'标题',
			list: [
				{
					name:'选项一',
					subname:"选项一描述",
					color:'#ffaa7f',
					fontSize:'20'
				},
				{
					name: '选项二禁用',
					disabled:true
				},
				{
					name: '开启load加载', //开启后文字不显示
					loading:true
				}
			],
			show: false
		};
	}
};
</script>
```

### 配置点击遮罩关闭和点击某个菜单项时关闭弹窗

- 通过`closeOnClickAction`参数来配置点击某个菜单项时是否关闭弹窗。
- 通过`closeOnClickOverlay`参数配置点击遮罩是否允许关闭（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）

```html
<template>
	<view>
		<u-action-sheet :actions="list" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title" :show="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'标题',
			list: [
				{
					name:'选项一'
				},
				{
					name: '选项二'
				}
			],
			show: false
		};
	},
	onLoad() {},
	methods: {
	}
};
</script>
```

### 点击获取所点击选项name

`select`回调事件带有一个`object`值，这个索引值为传递的`select`数组的name值，根据回调事件，能获得点击了
该项的内容


```html
<template>
	<view>
		<u-action-sheet :actions="list" @select="selectClick" :title="title" :show="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'标题',
			list: [
				{
					name:'选项一'
				},
				{
					name: '选项二'
				}
			],
			show: false
		};
	},
	onLoad() {},
	methods: {
		selectClick(index){
			console.log(index)
		}
	}
};
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/actionSheet/actionSheet.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/actionSheet/actionSheet.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

注意：props中没有控制组件弹出与收起的参数，因为这是通过show绑定变量实现的，见上方说明。

| 参数					|说明																								|类型				|默认值	|可选值							|
| :-					|:-																									|:-					|:-		|:-								|
| show					| 是否展示																							| Boolean			| false	| true							|
| title					| 设置标题																							| String			| -		| -								|
| description			| 选项上方的描述信息，见上方文档示例																	| String			| -		| -								|
| actions				| 按钮的文字数组，见上方文档示例																		| Array\<Object\>	| [ ]	| -								|
| cancelText			| 取消按钮的文字，不为空时显示按钮																		| String			| -		| -								|
| closeOnClickAction	| 点击某个菜单项时是否关闭弹窗，见上方文档示例															| String			| -		| -								|
| safeAreaInsetBottom	| 是否开启[底部安全区适配](/components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明)	| Boolean			| false	| true							|
| openType				| 小程序的打开方式																					| String			| -		| -								|
| closeOnClickOverlay	| 点击遮罩是否允许关闭，见上方文档示例（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）	| Boolean			| -		| -								|
| round					| 圆角值，默认无圆角																					| String &#124; Number			| 0	| -							|
| lang					| 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文											| String				| en	| zh_CN &#124; zh_TW &#124; en	|
| sessionFrom			| 会话来源，open-type="contact"时有效。只微信小程序有效													| String				| -		| -								|
| sendMessageTitle		| 会话内消息卡片标题，openType="contact"时有效															| String				| -		| -								|
| sendMessagePath		| 会话内消息卡片点击跳转小程序路径，openType="contact"时有效												| String				| -		| -								|
| sendMessageImg		| 会话内消息卡片图片，openType="contact"时有效															| String				| -		| -								|
| showMessageCard		| 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效| Boolean|false| true|
| appParameter			| 打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效											| String				| -		| -								|


### Event

|事件名			|说明																												|回调参数			|版本	|
|:-				|:-																													|:-					|:-		|
|select			| 点击ActionSheet列表项时触发																							| -					| -		|
|close			| 点击取消按钮时触发																									| -					| -		|
|getuserinfo	| 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效	| detail			| -		| 
|contact		| 客服消息回调，openType="contact"时有效																				| -					| -		|
|getphonenumber	| 获取用户手机号回调，openType="getPhoneNumber"时有效																	| -					| -		|
|error			| 当使用开放能力时，发生错误的回调，openType="error"时有效																| -					| -		|
|launchapp		| 打开 APP 成功的回调，openType="launchApp"时有效																		| -					| -		|
|opensetting	| 在打开授权设置页后回调，openType="openSetting"时有效																	| -					| -		|

