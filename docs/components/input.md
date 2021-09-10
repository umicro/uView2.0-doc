## Input 输入框 <to-api/>

<demo-model url="/pages/componentsC/input/input"></demo-model>

去除`fixed`、`showWordLimit`、`showConfirmBar`、`disableDefaultPadding`、`autosize`字段


此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件[u-form](/components/form.html)而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。  

**注意：** 当您仅是需要一个输入框的话，可以考虑使用[u-field](/components/field.html)组件，而如果是一个表单组，比如有多个输入框一起，且需要验证功能的时候，
应该在`u-form`中嵌套`u-form-item`，再嵌套`u-input`去实现。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|


### 基本使用

- 通过`value`绑定输入框的值
- 通过`type`设置输入框的类型，默认text
- 通过`placeholder`设置输入框为空时的占位符
- 通过`border`配置是否显示输入框的边框
- 绑定`@change`事件

```html
<template>
	<u--input :value="value" placeholder="请输入内容" border="surround" @change="change"></u--input>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		}
	}
</script>
```


### 输入框的类型

综述：输入框的类型可通过配置`type`来设置：
1. text-文本输入键盘。
2. number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数。
3. idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序。
4. digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序。


#### Text模式

将`type`设置为`text`，此种情况为一个单纯的输入框，但是还可以将其设置为`number`、`idcard`、`digit`等值，需要考虑兼容性，见上方说明。

```html
<template>
	<u-input v-model="value" :type="type" :border="border"  />
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'number',
				border: 'surround',
			}
		},
	}
</script>
```


#### Password模式

密码设置为独立字段属性`password`，如果`:password='true'`此时输入内容将会用点替代：

```html
<template>
	<u-input v-model="value" :password="true" suffix-icon="lock-fill" />
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			}
		}
	}
</script>
```


#### 前后图标


- 全后置图标可自由设置样式信息。

```html
<template>
	<u--input
	    placeholder="前置图标"
	    prefixIcon="search"
	    prefixIconStyle="font-size: 22px;color: #909399"
	></u--input>
	<u--input
	    placeholder="后置图标"
	    suffixIcon="map-fill"
	    suffixIconStyle="color: #909399"
	></u--input>
</template>

<script>
</script>
```


### API

### Props


| 参数					| 说明																																		| 类型					| 默认值				|  可选值												|
|:-						|:-																																			|:-						|:-					|:-														|
| value					| 输入的值																																	| Number &#124; String	| -					| -														|
| type					| 输入框类型，见上方说明																														| String				| text				| number / idcard / digit								|
| disabled				| 是否禁用输入框																																| Boolean				| false				| true													|
| disabledColor			| 禁用状态时的背景色																															| String				| #f5f7fa			| -														|
| clearable				| 是否显示清除控件																															| Boolean				| false				| true													|
| password				| 是否密码类型																																| Boolean				| false				| true													|
| maxlength				| 最大输入长度，设置为 -1 的时候不限制最大长度																									| String &#124; Number	| -1				| -														|
| placeholder			| 输入框为空时的占位符																														| String				| -					| -														|
| placeholderClass		| 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/																| String				| input-placeholder	| -														|
| placeholderStyle		| 指定placeholder的样式，字符串形式，如"color: red;"																							| String &#124; Object	| -					| -														|
| showWordLimit			| 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效																				| Boolean				| false				| true													|
| confirmType			| 设置右下角按钮的文字，兼容性详见uni-app文档																									| String				| done				| send &#124; search &#124; next &#124; go &#124; done	|
| confirmHold			| 点击键盘右下角按钮时是否保持键盘不收起，H5无效																									| Boolean				| false				| true													|
| holdKeyboard			| focus时，点击页面的时候不收起键盘，微信小程序有效																								| Boolean				| false				| true													|
| focus					| 自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点			| Boolean				| false				| true													|
| autoBlur				| 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效																								| Boolean				| false				| true													|
| disableDefaultPadding	| 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效																				| Boolean				| false				| true													|
| cursor				| 指定focus时光标的位置																														| String &#124; Number	| -1				| -														|
| cursorSpacing			| 输入框聚焦时底部与键盘的距离																													| String &#124; Number	| 30				| -														|
| selectionStart		| 光标起始位置，自动聚集时有效，需与selection-end搭配使用																						| String &#124; Number	| -1				| -														|
| selectionEnd			| 光标结束位置，自动聚集时有效，需与selection-start搭配使用																						| String &#124; Number	| -1				| -														|
| adjustPosition		| 键盘弹起时，是否自动上推页面																													| Boolean				| true				| false													|
| inputAlign			| 输入框内容对齐方式																															| String				| left				| left &#124; center &#124; right						|
| autosize				| 是否自适应内容高度，只对type=textarea有效，可传入对象,如{ maxHeight: 100, minHeight: 50 }														| Boolean				| false				| true													|
| fontSize				| 输入框字体的大小																															| String &#124; Number	| 15px				| -														|
| color					| 输入框字体颜色																																| String				| #606266			| -														|
| prefixIcon			| 输入框前置图标																																| String				| -					| -														|
| prefixIconStyle		| 前置图标样式，对象或字符串																													| String &#124; Object	| -					| -														|
| suffixIcon			| 输入框后置图标																																| String				| -					| -														|
| suffixIconStyle		| 后置图标样式，对象或字符串																													| String &#124; Object	| -					| -														|
| border				| 边框类型，surround-四周边框，bottom-底部边框，none-无边框																						| String				| surround			| bottom &#124; none									|
| readonly				| 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会																			| Boolean				| false				| true													|
| shape					| 输入框形状，circle-圆形，square-方形																											| String				| square			| circle												|
		


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 35%;
}
</style>
