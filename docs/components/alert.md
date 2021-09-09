## Alert 警告提示 <to-api/>

<demo-model url="/pages/componentsB/alert/alert"></demo-model>

警告提示，展现需要关注的信息。

### 使用场景

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`title`和`description`设置组件的标题和描述内容
- 通过`type`设置主题类型，有`primary`,`success`,`error`,`warning`,`info`可选值
- 通过`effect`设置主题浅或深色调，有`light`(浅色 默认),`dark`(深色)可选值
```html
<template>
	<view>
		<u-alert :title="title" type = "warning" :description = "description"></u-alert>
		<u-alert :title="title" type = "warning" effect="dark" :description = "description"></u-alert>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'uView的目标是成为uni-app生态最优秀的UI框架',
			description:'uView是uni-app生态专用的UI框架'
		};
	},
	onLoad() {},
	methods: {
	}
};
</script>
```

### 图标

通过`showIcon`设置是否显示图标，作用是让信息类型更加醒目。

**注意**：当前版本图标为uView内置图标，根据`type`参数显示不同的图标，无法自定义。

```html
<u-alert type="warning" :show-icon="true"></u-alert>
```

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。
- `closable`参数配置是否可关闭


```html
<template>
	<view>
		<u-alert :title="title"  type = "warning" :closable="closable" :description = "description"></u-alert>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'uView的目标是成为uni-app生态最优秀的UI框架',
			description:'uView是uni-app生态专用的UI框架',
			closable:true
		};
	},
	onLoad() {},
	methods: {
	}
};
</script>
```

### API

### Props

| 参数			| 说明												| 类型					| 默认值			| 可选值												|
|:-				|:-													|:-						|:-				|:-													|
| title			| 显示的文字											| String				| -				| -													|
| type			| 使用预设的颜色										| String				| warning		| success &#124; primary &#124; error &#124; info	|
| description	| 辅助性文字，颜色比`title`浅一点，字号也小一点，可选	| String				| -				| -													|
| closable		| 关闭按钮(默认为叉号icon图标)							| Boolean				| false			| true												|
| showIcon		| 是否显示左边的辅助图标								| Boolean				| false			| true												|
| effect		| 多图时，图片缩放裁剪的模式							| String				| light(浅色)	| dark(深色)											|
| center		| 文字是否居中										| Boolean				| false			| true												|
| fontSize		| 字体大小											| String &#124; Number	| 14			| -													|


### Events

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
|click	|点击组件时触发	|-			|
