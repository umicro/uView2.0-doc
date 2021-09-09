## Link 超链接

<demo-model url="/pages/componentsA/link/link"></demo-model>


该组件为超链接组件，在不同平台有不同表现形式：
- 在APP平台会通过`plus`环境打开内置浏览器
- 在小程序中把链接复制到粘贴板，同时提示信息
- 在H5中通过`window.open`打开链接

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`href`设置打开的链接，`text`设置显示的内容

```html
<template>
	<u-link href="https://uviewui.com/" text="打开uView UI文档" @click="click"></u-link>
</template>

<script>
	export default {
		methods: {
			click() {
				console.log('click');
			}
		}
	}
</script>
```

### 下划线

通过`under-line`设置是否显示链接的下划线

```html
<template>
	<u-link href="https://uviewui.com/" text="打开uView UI文档" :under-line="true"></u-link>
</template>
```

### 自定义颜色

- 通过`color`设置文字颜色
- 通过`line-color`设置下划线颜色

```html
<template>
	<u-link href="https://uviewui.com/" text="打开uView UI文档" color="#19be6b" line-color="#19be6b"></u-link>
</template>
```


### API

### Props

| 参数		| 说明													| 类型					| 默认值						|  可选值	|
|:-			|:-														|:-						|:-							|:-			|
| color		| 文字颜色												| String				| color['u-primary']		| -			|
| fontSize	| 字体大小，默认单位px									| String &#124; Number	| 15						| -			|
| underLine	| 是否显示下划线											| Boolean				| false						| true		|
| href		| 跳转的链接，要带上http(s)								| String				| -							| -			|
| mpTips	| 各个小程序平台把链接复制到粘贴板后的提示语					| String				| 链接已复制，请在浏览器打开	| -			|
| lineColor	| 下划线颜色，默认同`color`参数颜色						| String				| -							| -			|
| text		| 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色	| String				| -							| -			|
