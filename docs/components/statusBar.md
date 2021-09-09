## StatbusBar 状态栏占位 <to-api/>
      
本组件主要用于状态填充，比如在自定导航栏的时候，它会自动适配一个恰当的状态栏高度。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

可以通过```bgColor```设置状态的背景色，默认为透明色(transparent)

```html
<template>
	<u-status-bar></u-status-bar>
</template>
```

### API

### Props

| 参数			| 说明		| 类型					| 默认值			|  可选值	|
|:-				|:-			|:-						|:-				|:-			|
| bgColor		| 背景色		| String				| transparent	| -			|
| customStyle	| 自定义样式	| String &#124; Object	| -				| -			|
