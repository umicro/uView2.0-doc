## LineProgress 线形进度条 <to-api/>


<demo-model url="/pages/componentsB/progress/progress"></demo-model>


展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`percentage`设置当前的进度值，该值区间为0-100.
- 通过`activeColor`设置进度条的颜色

```html
<template>
	<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
</template>
```

### 不显示百分比

不显示百分比值信息
- `show-text`参数配置是否显示进度条内百分值

```html
<template>
	<u-line-progress :percentage="30" :showText="false"></u-line-progress>
</template>
```


### 自定义高度

- `height`进度条高度

```html
<template>
	<u-line-progress :percentage="30" height="8"></u-line-progress>
</template>
```


### 自定义样式(不支持安卓环境的nvue)

- 自定义的数值样式嵌套在默认插槽里

```html
<template>
	<u-line-progress :percentage="30">
		<text class="u-percentage-slot">{{30}}%</text>
	</u-line-progress>
</template>

<style lang="scss" scoped>
.u-percentage-slot {
	padding: 1px 5px;
	background-color: $u-warning;
	color: #fff;
	border-radius: 100px;
	font-size: 10px;
	margin-right: -5px;
}
</style>
```

### 手动加减

- 通过控制`percentage`参数数值达到增减

```html
<template>
	<view style="margin-top: 50px;">
		<u-line-progress :percentage="percentage" />
		<view style="display: flex;margin-top: 100px;">
			<button @click="computedWidth('minus')">减少</button>
			<button @click="computedWidth('plus')">增加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percentage: 30,
			}
		},
		methods:{
			computedWidth(type) {
				if(type === 'plus') {
					this.percentage = uni.$u.range(0, 100, this.percentage + 10)
				} else {
					this.percentage = uni.$u.range(0, 100, this.percentage - 10)
				}
			}
		}
	}
</script>
```


### API

### Props

| 参数			| 说明							| 类型					| 默认值		|  可选值	|
|:-				|:-								|:-						|:-			|:-			|
| activeColor	| 进度条激活部分的颜色			| String				| #19be6b	| -			|
| inactiveColor	| 进度条的底色，默认为灰色			| String				| #ececec	| -			|
| percentage	| 进度百分比，数值				| String &#124; Number	| 0			| -			|
| showText		| 是否在进度条内部显示百分比的值	| Boolean				| true		| false		|
| height		| 进度条的高度，默认单位px			| String &#124; Number	| 12		| -			|


 ### Slots

| 名称							| 说明												|
|:-								|:-													|
| default | 传入自定义的显示内容，将会覆盖默认显示的百分比值		|


<style scoped>
h3[id=slots] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
