## Overlay 遮罩层 <to-api/>

<demo-model url="/pages/componentsC/mask/index"></demo-model>


创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`show`参数配置是否显示遮罩  
- 遮罩被点击时，会发送一个`click`事件，如不需要此事件，请设置`mask-click-able`参数为`false`

```html
<template>
	<u-overlay :show="show" @click="show = false"></u-overlay>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容  
注意：如果不想让`slot`插槽内容的点击事件冒泡到遮罩，请给指定元素添加上`@tap.stop`

```html
<template>
	<u-overlay :show="show" @click="show = false">
		<view class="warp">
			<view class="rect" @tap.stop></view>
		</view>
	</u-overlay>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>

<style scoped>
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}
</style>
```

### 遮罩样式

- 通过`duration`设置遮罩淡入淡出的时长，单位`ms`

```html
<u-overlay :show="show" :duration="400" :z-index ="999" :opacity="0.3"></u-overlay>
```

### API

### Props

| 参数		| 说明								| 类型					| 默认值	| 可选值	|
| :-		| :-								| :-					| :-	| :-	|
| show		| 是否显示遮罩						| Boolean				| false	| true	|
| zIndex	| z-index 层级						| String &#124; Number	| 10070	| -		|
| duration	| 动画时长，单位毫秒					| String &#124; Number	| 300	| -		|
| opacity	| 不透明度值，当做rgba的第四个参数		| String &#124; Number	| 0.3	| -		|

### Events

| 事件名	| 说明				| 回调参数	|
| :-	| :-				| :-		|
| click	| 点击遮罩发送此事件	| -			|

### Slot

| 名称		| 说明								|
| :-		| :-								|
| default	| 默认插槽，用于在遮罩层上方嵌入内容	|



<style scoped>
h3[id=events] + table thead tr th:nth-child(2){
	width: 50%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
