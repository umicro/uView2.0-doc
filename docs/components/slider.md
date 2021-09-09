## Slider 滑动选择器 <to-api/>
      
<demo-model url="/pages/componentsB/slider/slider"></demo-model>

该组件一般用于表单中，手动选择一个区间范围的场景。

::: tip 说明
该组件在```H5```，```微信小程序```和```APP-VUE```等平台上使用了```WXS```技术，在```NVUE```平台使用了```BindingX```技术，
故在滑动过程中可以获得细腻流畅的跟随效果。
:::

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

需要通过`v-model`绑定一个值，来初始化滑块的选择值(0到100之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。


```html
<template>
	<u-slider v-model="value"></u-slider>
</template>
	
<script>
	export default {
		data() {	
			return {
				value: 30
			}
		}
	}
</script>
```

### 设置最大和最小值

通过`min`和`max`，可以设置滑块所能选择的最大和最小值

```html
<u-slider v-model="value" min="30" max="80"></u-slider>
```


### 设置步进值

通过`step`参数设置步进值，这个步进值为每次跳变的值，具体表现请见示例。  

:::tip 提示
需要注意的是，这个`step`必须要被`max`值整除，否则会出现无法无法滑动到最大值的情况
:::

```html
<u-slider v-model="value" step="20" min="30" max="100"></u-slider>
```

### 禁用状态

```html
<u-slider v-model="value" disabled></u-slider>
```


### 自定义按钮的内容和样式

- ```activeColor```，设置进度条的激活部分颜色
- ```inactiveColor```，进度条的激活部分颜色
- ```inactiveColor```，进度条的背景颜色
- ```blockColor```，滑块的背景颜色
- ```blockStyle```，用户对滑块的自定义样式(颜色)

```html
<template>
	<u-slider v-model="value" activeColor="#3c9cff" inactiveColor="#c0c4cc">
	
	</u-slider>
</template>
	
<script>
	export default {
		data() {	
			return {
				value: 30
			}
		}
	}
</script>
```


### 自定义滑动选择器整体的样式

- 通过`inactive-color`配置底部滑动条背景颜色
- 通过`active-color`配置底部选择部分的背景颜色
- 通过`block-width`配置滑块宽度(高等于宽)
- 通过`block-color`配置滑动按钮按钮的颜色
- 通过`height`配置滑块条高度，单位rpx

其他更多参数详见底部API

```html
<u-slider v-model="value" block-width="40" block-color="red"></u-slider>
```


### API

### Props

| 参数			| 说明							| 类型					| 默认值		|  可选值	|
|:-				|:-								|:-						|:-			|:-			|
| value			| 双向绑定滑块选择值				| String &#124; Number	| 0			| -			|
| blockSize		| 滑块的大小					| String &#124; Number				| 18		| 12 - 28		|
| min			| 可选的最小值(0-100之间)		| String &#124; Number	| 1			| -			|
| max			| 可选的最大值(0-100之间)		| String &#124; Number	| 100		| -			|
| step			| 选择的步长						| String &#124; Number	| 1			| -			|
| activeColor	| 进度条的激活部分颜色			| String				| #2979ff	| -			|
| inactiveColor	| 进度条的背景颜色				| String				| #c0c4cc	| -			|
| blockColor	| 滑块背景颜色					| String				| #ffffff	| -			|
| showValue	| 是否显示当前 value					| Boolean				| false	| true		|
| blockStyle	| 滑块按钮自定义样式，对象形式	| Object &#124; String	| -			| -			|


### Slider Events

| 事件名	| 说明			| 回调参数					|
| :-	| :-			| :-						|
| input| 更新v-model的（拖动过程中）	| value：当前值	|
| changing	| 触发事件（拖动过程中）	| value：当前值	|
| input	| 更新v-model的	| value：当前值	|
| change	| 触发事件	| value：当前值	|


<style >
h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
