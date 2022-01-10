## Keyboard 键盘 <to-api/>

<demo-model url="/pages/componentsB/keyboard/keyboard"></demo-model>


此为uView自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3种模式，都有可以打乱按键顺序的选项。

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用


通过`mode`参数定义键盘的类型，`show`绑定一个值为布尔值的变量控制键盘的弹出与收起：
- mode = car  (默认值)为汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"
- mode = number为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"
- mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"

```html
<template>
	<view>
		<u-keyboard ref="uKeyboard" mode="car" :show="show"></u-keyboard>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>
```

### 隐藏键盘"."符号

- 通过`dotDisabled`参数配置是否显示键盘"."符号，默认为`false`，只在"mode = number"时生效

```html
<u-keyboard mode="number" :dotDisabled="true"></u-keyboard>
```

### 是否打乱按键的顺序

如果配置`random`参数为`true`的话，**每次**打开键盘，按键的顺序都是随机的，该功能默认是关闭的

```html
<u-keyboard ref="uKeyboard" mode="number" :random="true" :show="show"></u-keyboard>
```

### 如何控制键盘的打开和关闭？

```html
<template>
	<u-keyboard mode="number" :show="show"></u-keyboard>
</template>

<script>
	export default {
		onReady() {
			// 如果想一进入页面就打开键盘，请在此生命周期调用
			this.show = true;
		},
		onLoad() {
			// 不应在此调用，因为此时u-keyboard组件尚未创建完成
			// this.show = true;
		}
	}
</script>
```

### 如何监听键盘按键被点击？

- 输入值是通过组件的`change`事件实现的，组件内部每个按键被点击的时候，组件就会发出一个`change`事件，回调参数为点击的按键的值。  
- 通过`backspace`事件监听键盘退格键的点击，通过修改父组件的值实现退格的效果，见下方示例

注意：点击退格键(也即删除键)不会触发`change`事件

```html
<template>
	<u-keyboard mode="number" @change="valChange" @backspace="backspace" :show="show"></u-keyboard>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false
			}
		},
		methods: {
			// 按键被点击(点击退格键不会触发此事件)
			valChange(val) {
				// 将每次按键的值拼接到value变量中，注意+=写法
				this.value += val;
				console.log(this.value);
			},
			// 退格键被点击
			backspace() {
				// 删除value的最后一个字符
				if(this.value.length) this.value = this.value.substr(0, this.value.length - 1);
				console.log(this.value);
			}
		}
	}
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/keyboard/keyboard.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/keyboard/keyboard.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props


| 参数					| 说明																								| 类型					| 默认值	| 可选值			|
| :-					| :-																								| :-					| :-	| :-			|
| mode					| 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘											| String				| car	| number / card	|
| dotDisabled			| 是否显示"."按键，只在mode=number时有效																| Boolean				| false	| true			|
| tooltip				| 是否显示键盘顶部工具条																				| Boolean				| true	| false			|
| showTips				| 是否显示工具条中间的提示																			| Boolean				| true	| false			|
| tips					| 工具条中间的提示文字，见上方`基本使用`的说明															| String				| -		| -				|
| showCancel			| 是否显示工具条左边的"取消"按钮																		| Boolean				| true	| false			|
| showConfirm			| 是否显示工具条右边的"完成"按钮																		| Boolean				| true	| false			|
| random				| 是否打乱键盘按键的顺序																				| Boolean				| false	| true			|
| safeAreaInsetBottom	| 是否开启[底部安全区适配](/components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明)	| Boolean				| false	| true			|
| closeOnClickOverlay	| 是否允许点击遮罩收起键盘（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）	| Boolean				| true	| false			|
| show					| 控制键盘的弹出与收起																				| Boolean				| true	| false			|
| overlay				| 是否显示遮罩																						| Boolean				| true	| false			|
| zIndex				| 弹出键盘的`z-index`值																				| String &#124; Number 	| 1075	| -				|
| confirmText			| 确认按钮的文字																						| String				| 确认	| -				|
| cancelText			| 取消按钮的文字																						| String				| 取消	| -				|
| customStyle			| 自定义样式，对象形式																				| Object				| {}	| -				|
| autoChange			| `mode`为`car`下，输入文字后，是否自动切换为字母模式																	| Boolean				| false	| true			|


### Events

| 事件名		| 说明									| 回调参数					| 版本	|
| :-		| :-									| :-						| :-	|
| change	| 按键被点击(不包含退格键被点击)		    	| 按键的值，见上方说明和示例	| -		|
| close     | 键盘关闭								| -							| -		|
| confirm	| 键盘顶部工具条右边的"完成"按钮被点击       	| -							| -		|
| cancel	| 键盘顶部工具条左边的"取消"按钮被点击       	| -							| -		|
| backspace	| 键盘退格键被点击					    	| -							| -		|
### Slot

| 名称		| 说明																																				| 版本	|
| :-		| :-																																				| :---	|
| default	| 内容将会显示键盘的工具条上面，可以结合[MessageInput 验证码输入](/components/messageInput.html)组件实现类似支付宝输入密码时，上方显示输入内容的功能		| -		|


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=events] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 60%;
}
</style>
