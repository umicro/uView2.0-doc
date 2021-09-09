## Modal 模态框 <to-api/>

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

<demo-model url="/pages/componentsA/modal/index"></demo-model>


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用


默认情况下，模态框只有一个`确认`按钮：
- 请至少要配置弹框的内容参数`content`。
- 通过`show`绑定一个布尔变量来控制模态框的显示与否。

```html
<template>
	<view >
		<u-modal :show="show" :title="title" :content='content'></u-modal>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show:false,
			title:'标题',
			content:'uView的目标是成为uni-app生态最优秀的UI框架'
		};
	}
};
</script>
```

### 传入富文本内容

有时候我们需要给模态框的内容，不一定是纯文本的字符串，可能会需要换行，嵌入其他元素等，这时候我们可以使用`slot`功能，再结合uni-app`rictText`组件，
就能传入富文本内容了，如下演示：


```html
<template>
	<view >
		<u-modal :show="show"  :title="title" >
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show:false,
			title:'标题',
			content:`空山新雨后<br>
					天气晚来秋`
		};
	}
};
</script>
```

### 异步关闭

异步关闭只对"确定"按钮起作用，需要设置`asyncClose`为`true`，当点击确定按钮的时候，按钮的文字变成一个loading动画，此动画的颜色为
`confirm-color`参数的颜色，同时Modal不会自动关闭，需要手动设置通过`show`绑定的变量为`false`来实现手动关闭。

```html
<template>
	<view class="">
		<u-modal :show="show" @confirm="confirm" ref="uModal" :asyncClose="true"></u-modal>
		<u-button @click="showModal">弹起Modal</u-button>
	</view>
</template>

<script>
export default {
    data() {
        return {
			show: false
		}
	},
	onLoad: function(opt) {
		
	},
	methods:{
		showModal() {
			this.show = true;
		},
		confirm() {
			setTimeout(() => {
				// 3秒后自动关闭
				this.show = false;
				// 如果不想关闭，而单是清除loading状态，需要通过ref手动调用方法
				// this.$refs.uModal.clearLoading();
			}, 3000)
		}
    }
}
</script>
```

### 点击遮罩关闭

有时候我们不显示"关闭"按钮的时候，需要点击遮罩也可以关闭Modal，这时通过配置`closeOnClickOverly`为`true`即可

```html
<u-modal :show="show" :closeOnClickOverly="true"></u-modal>
```

### 控制模态框宽度

可以通过设置`width`参数控制模态框的宽度，不支持百分比，可以数值，px，rpx单位


```html
<u-modal v-model="show" width="300px"></u-modal>
```


### 缩放效果

开启缩放效果，在打开和收起模态框的时候，会带有缩放效果，具体效果请见示例，此效果默认开启，通过`zoom`参数配置

```html
<u-modal v-model="show" :zoom="false"></u-modal>
```


### API

### Props

注意：需要给`modal`组件通过`show`绑定一个布尔值，来初始化`modal`的状态，随后该值被双向绑定。

| 参数				| 说明																						| 类型					| 默认值		|  可选值							|
|:-					|:-																							|:-						|:-			|:-									|
| show				| 是否显示模态框，请赋值给`show`																| Boolean				| false		| true								|
| title				| 标题内容																					| String				| -			| -									|
| content			| 模态框内容，如传入`slot`内容，则此参数无效													| String				| -			| -									|
| confirmText		| 确认按钮的文字																				| String				| 确认		| -									|
| cancelText		| 取消按钮的文字																				| String				| 取消		| -									|
| showConfirmButton	| 是否显示确认按钮																			| Boolean				| true		| false								|
| showCancelButton	| 是否显示取消按钮																			| Boolean				| false		| true								|
| confirmColor		| 确认按钮的颜色																				| String				| #2979ff	| -									|
| cancelColor		| 取消按钮的颜色																				| String				| #606266	| -									|
| buttonReverse		| 对调确认和取消的位置																		| Boolean				| false		| true								|
| zoom				| 是否开启缩放模式																			| Boolean				| true		| false								|
| asyncClose		| 是否异步关闭，只对确定按钮有效，见上方说明														| Boolean				| false		| true								|
| closeOnClickOverly| 是否允许点击遮罩关闭Modal																	| Boolean				| false		| true								|
| negativeTop		| 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位	| String &#124; Number	| 0			| -									|
| width				| modal宽度，不支持百分比，可以数值，px，rpx单位												| String &#124; Number	| 650rpx	| px &#124; rpx						|
| confirmButtonShape| 确认按钮的样式,如设置，将不会显示取消按钮														| String				| -			| circle(圆形) &#124; square(方形)	|

### Event

|事件名		|说明											|回调参数	|
|:-			|:-												|:-			|
| confirm	| 点击确认按钮时触发								| -			|
| cancel	| 点击取消按钮时触发								| -			|
| close		| 点击遮罩关闭出发，closeOnClickOverly为true有效	| -			|


### Method

此方法需要通过ref调用，详见上方的"异步关闭"

|事件名			|说明																|
|:-				|:-																	|
| clearLoading	| 异步控制时，通过调用此方法，可以不关闭Modal，而单是清除loading状态		|


### Slots

| 名称									| 说明													|
|:-										|:-														|
| default								| 传入自定义内容，一般为富文本，见上方说明					|
| confirm-button <Badge text="1.6.0" />	| 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景		|


<style scoped>
h3[id=slots] + table thead tr th:nth-child(2){
	width: 50%;
}

h3[id=method] + p + table thead tr th:nth-child(2){
	width: 50%;
}
</style>