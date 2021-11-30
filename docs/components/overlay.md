## Overlay 遮罩层 <to-api/>

<demo-model url="/pages/componentsA/overlay/overlay"></demo-model>


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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/overlay/overlay.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/overlay/overlay.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数		| 说明								| 类型					| 默认值	| 可选值	|
| :-		| :-								| :-					| :-	| :-	|
| show		| 是否显示遮罩						| Boolean				| false	| true	|
| zIndex	| z-index 层级						| String &#124; Number	| 10070	| -		|
| duration	| 动画时长，单位毫秒					| String &#124; Number	| 300	| -		|
| opacity	| 不透明度值，当做rgba的第四个参数		| String &#124; Number	| 0.5	| -		|

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
