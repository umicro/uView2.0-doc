## Modal 模态框 <to-api/>

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

<demo-model url="/pages/componentsC/modal/modal"></demo-model>


### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

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
			}, 3000)
		}
    }
}
</script>
```

### 点击遮罩关闭

有时候我们不显示"关闭"按钮的时候，需要点击遮罩也可以关闭Modal，这时通过配置`closeOnClickOverlay`为`true`即可（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）

```html
<u-modal :show="show" :closeOnClickOverlay="true"></u-modal>
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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/modal/modal.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/modal/modal.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

注意：需要给`modal`组件通过`show`绑定一个布尔值，来初始化`modal`的状态，随后该值被双向绑定。

| 参数				                             | 说明																						| 类型					               | 默认值		    |  可选值							|
|:-----------------------------------|:-																							|:----------------------|:---------|:-									|
| show				                           | 是否显示模态框，请赋值给`show`																| Boolean				           | false		  | true								|
| title				                          | 标题内容																					| String				            | -			     | -									|
| content			                         | 模态框内容，如传入`slot`内容，则此参数无效													| String				            | -			     | -									|
| confirmText		                      | 确认按钮的文字																				| String				            | 确认		     | -									|
| cancelText		                       | 取消按钮的文字																				| String				            | 取消		     | -									|
| showConfirmButton	                 | 是否显示确认按钮																			| Boolean				           | true		   | false								|
| showCancelButton	                  | 是否显示取消按钮																			| Boolean				           | false		  | true								|
| confirmColor		                     | 确认按钮的颜色																				| String				            | #2979ff	 | -									|
| cancelColor		                      | 取消按钮的颜色																				| String				            | #606266	 | -									|
| duration		<Badge text="2.0.37" />  | 弹窗动画过度时间																				| Number				            | 400	     | -									|
| buttonReverse		                    | 对调确认和取消的位置																		| Boolean				           | false		  | true								|
| zoom				                           | 是否开启缩放模式																			| Boolean				           | true		   | false								|
| asyncClose		                       | 是否异步关闭，只对确定按钮有效，见上方说明														| Boolean				           | false		  | true								|
| closeOnClickOverlay                | 是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）	| Boolean				           | false		  | true								|
| negativeTop		                      | 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位	| String &#124; Number	 | 0			     | -									|
| width				                          | modal宽度，不支持百分比，可以数值，px，rpx单位												| String &#124; Number	 | 650rpx	  | px &#124; rpx						|
| confirmButtonShape                 | 确认按钮的样式,如设置，将不会显示取消按钮														| String				            | -			     | circle(圆形) &#124; square(方形)	|

### Event

|事件名		|说明											|回调参数	|
|:-			|:-												|:-			|
| confirm	| 点击确认按钮时触发								| -			|
| cancel	| 点击取消按钮时触发								| -			|
| close		| 点击遮罩关闭触发，closeOnClickOverlay为true有效	| -			|

### Slots

| 名称									| 说明													|
|:-										|:-														|
| default								| 传入自定义内容，一般为富文本，见上方说明					|
| confirmButton | 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景		|


<style scoped>
h3[id=slots] + table thead tr th:nth-child(2){
	width: 50%;
}

h3[id=method] + p + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
