## CountTo 数字滚动 <to-api/>

<demo-model url="/pages/componentsB/countTo/countTo"></demo-model>

该组件一般用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。

::: warning 注意
如果给组件的父元素设置`text-align: center`想让数字水平居中，可能是由于元素内容快速变化而导致渲染的问题，在APP上组件可能会有轻微的左右抖动现象，
解决办法是给父元素设置`padding-left`或者`margin-left`即可。
:::

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用

通过`startVal`设置开始值，`endVal`设置结束值

```html
<u-count-to :startVal="30" :endVal="500"></u-count-to>
```

### 设置滚动相关参数

- 通过`duration`设置从开始值到结束值整个滚动过程所需的时间，单位`ms`
- 通过`useEasing`设置滚动快结尾的时候，是否放慢滚动的速度，给用户更好的视觉效果

```html
<u-count-to :start-val="30" :end-val="500" :duration="2000" :useEasing="false"></u-count-to>
```

### 是否显示小数位

通过`decimals`设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为
`startVal`和`endVal`一样的小数位数值，如`endVal`为1200.55，那么`decimals`应该设置为2。

```html
<u-count-to :startVal="30" :endVal="500.55" :decimals="2"></u-count-to>
```

### 千分位分隔符

通过`separator`配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为`endVal`值超过1000时，比如为"1257"，那么滚动后会变成"1,245"，在金额数值时，
该参数可能会用上。

```html
<u-count-to :endVal="1542" separator=","></u-count-to>
```

### 滚动执行的时机

可以通过`autoplay`设置是否需要初始化时就开始滚动，默认为`true`，如果设置为`false`，可以通过组件的`ref`去控制组件内部的`start()`和`paused()`
方法来开始或暂停。

```html
<template>
	<u-count-to ref="uCountTo" :endVal="endVal" :autoplay="autoplay"></u-count-to>
</template>

<script>
	export default {
		data() {
			return {
				endVal: 5000.55,
				autoplay: false
			};
		},
		methods: {
			start() {
				this.$refs.uCountTo.start();
			},
			paused() {
				this.$refs.uCountTo.paused();
			},
			reStart() {
				this.$refs.uCountTo.reStart();
			},
		}
	}
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/countTo/countTo.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/countTo/countTo.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数		| 说明									| 类型					| 默认值		|  可选值	|
|:-			|:-										|:-						|:-			|:-			|
| startVal	| 开始值									| String &#124; Number	| 0			| -			|
| endVal	| 结束值									| String &#124; Number	| 0			| -			|
| duration	| 滚动过程所需的时间，单位ms				| String &#124; Number	| 2000		| -			|
| autoplay	| 是否自动开始滚动						| Boolean				| true		| false		|
| decimals	| 要显示的小数位数，见上方说明				| String &#124; Number	| 0			| -			|
| useEasing	| 滚动结束时，是否缓动结尾，见上方说明		| Boolean				| true		| false		|
| decimal	| 十进制分割								| String				| .			| -			|
| color		| 字体颜色								| String				| #606266	| -			|
| fontSize	| 字体大小，单位px						| String &#124; Number	| 22		| -			|
| bold		| 字体是否加粗							| Boolean				| false		| true		|
| separator	| 千位分隔符，见上方说明					| String				| -			| -			|


### Methods

此方法如要通过ref手动调用

| 名称		| 说明										|
|:-			|:-											|
| start		|`autoplay`为`false`时，通过此方法启动滚动		|
| reStart	|暂停后重新开始滚动(从暂停前的值开始滚动)		|
| paused	|暂停滚动									|


### Event

|事件名	|说明					|回调参数	|版本	|
|:-		|:-						|:-			|:-		|
| end	| 数值滚动到目标值时触发	| -			| -		|


<style scoped>
h3[id=methods] + p + table thead tr th:nth-child(1) {
	width: 50%;
}

h3[id=methods] + p + table thead tr th:nth-child(2) {
	width: 50%;
}
</style>
