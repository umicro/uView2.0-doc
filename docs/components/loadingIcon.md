## LoadingIcon 加载动画 <to-api/>

<demo-model url="/pages/componentsA/loading-icon/loading-icon"></demo-model>


此组件为一个小动画，目前用在uView的[loadMore加载更多](/components/loadMore.html)等组件的正在加载状态场景。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

通过`mode`设定动画的类型，`circle`为圆圈的形状，`flower`为经典类似花朵的形状


```html
<template>
	<view>
		<u-loading-icon></u-loading-icon>
	</view>
</template>
```

### 动画文字

`text`可以指定文字内容
`textSize`可以指定文字大小

```html
<u-loading-icon text="加载中" textSize="18"></u-loading-icon>
```

### 模式类型

`mode`可以指定模式

```html
<u-loading-icon text="花朵形"></u-loading-icon>
<u-loading-icon mode="semicircle" text="半圆"></u-loading-icon>
<u-loading-icon mode="circle" text="圆型"></u-loading-icon>
```

### 排列类型

`vertical`可以指定文字和图标是否垂直排列

```html
<u-loading-icon :vertical="true"></u-loading-icon>
```

### 动画模式

`timing-function`可以指定`mode`为`semicircle`或`circle`时动画里css中`animation-timing-function`的属性，默认为`ease-in-out`

```html
<u-loading-icon timing-function="linear"></u-loading-icon>
```

### 动画运行时间

`duration`可以指定动画的运行周期时间

```html
<u-loading-icon duration="2000"></u-loading-icon>
```

### 图标颜色

`color`可以指定动画活动区域的颜色, `inactive-color`可以制定`mode`为`circle`时的暗边颜色

```html
<u-loading-icon color="red"></u-loading-icon>

<u-loading-icon mode="circle" inactive-color="red"></u-loading-icon>
```

### 图标尺寸

通过`size`设定尺寸，单位rpx，组件内把`size`值体现为组件的宽和高

```html
<u-loading-icon size="36"></u-loading-icon>
```

### 显示或隐藏动画

通过`show`设置为`true`或`false`，来显示或隐藏动画

```html
<u-loading-icon :show="true"></u-loading-icon>

/* 等价于 */
<u-loading-icon show></u-loading-icon>
```


### API

### Props

| 参数			| 说明																					| 类型					| 默认值					| 可选值				|
| :-			| :-																					| :-					| :-					| :-					|
| show			| 是否显示动画																			| Boolean				| true					| false					|
| color			| 图标颜色																				| String				| color['u-tips-color']	| -						|
| vertical		| 图标和文字是否垂直排列																	| Boolean				| false					| true					|
| mode			| 模式选择，见上方说明																	| String				| circle 				| circle \ semicircle	|
| size			| 加载图标的大小，单位px																	| String &#124; Number	| 24					| -						|
| textSize		| 加载文字的大小，单位px																	| String &#124; Number	| 15					| -						|
| text			| 文字内容																				| String				| -						| -						|
| timingFunction| 指定`animation-timing-function`的css属性，但只支持`mode`为`circle`或`semicircle`才有效	| String				| ease-in-out			| -						|
| duration		| 动画执行周期时间，单位ms																	| string &#124; Number	| 1200					| -						|
| inactiveColor	| 图标的暗边颜色, `mode`为`circle` 模式有效												| String				| transparent			| -						|


