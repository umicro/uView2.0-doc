## Textarea 文本域 <to-api/>

<demo-model url="/pages/componentsC/textarea/textarea"></demo-model>

文本域此组件满足了可能出现的表单信息补充，编辑等实际逻辑的功能，内置了字数校验等 

### 基本使用

```html
<u--textarea v-model="value1" placeholder="请输入内容" ></u--textarea>
<script>
	export default {
		data() {
			return {
				value1: '',
			}
		},
	}
</script>
```
### 字数统计

设置`count`属性实现字数统计
```html
<u--textarea v-model="value2" placeholder="请输入内容" count ></u--textarea>
<script>
	export default {
		data() {
			return {
				value2: '统计字数',
			}
		},
	}
</script>
```
### 自动增高

设置`autoHeight`属性实现自动增高
```html
<u--textarea v-model="value3" placeholder="请输入内容" autoHeight ></u--textarea>
<script>
	export default {
		data() {
			return {
				value3: '',
			}
		},
	}
</script>
```

### 禁用状态

设置`disabled`属性实现进行禁用，您也可以动态设置是否禁用
```html
<u--textarea v-model="value4" placeholder="文本域已被禁用" disabled count></u--textarea>
<script>
	export default {
		data() {
			return {
				value4: '',
			}
		},
	}
</script>
```
### 下划线模式

设置`border="bottom"`属性单独设置底部下划线
```html
<u--textarea v-model="value5" placeholder="请输入内容" border="bottom"></u--textarea>
<script>
	export default {
		data() {
			return {
				value5: '',
			}
		},
	}
</script>
```

### API

### List Props

| 参数					| 说明																| 类型					| 默认值		|  可选值	|
|:-						|:-																	|:-						|:-			|:-			|
| value					| 输入框的内容														| String				| -			| -			|
| placeholder			| 输入框为空时占位符													| Number &#124; String	| -			| -			|
| height				| 输入框高度															| String &#124; Number	| 70		| -			|
| confirmType			| 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效				| String				| done		| -			|
| disabled				| 是否禁用															| Boolean				| false		| true		|
| count					| 是否显示统计字数													| Boolean				| false		| true		|
| focus					| 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现						| Boolean				| false		| true		|
| autoHeight			| 是否自动增加高度													| Boolean				| false		| true		|
| fixed					| 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true	| Boolean				| false		| true		|
| cursorSpacing			| 指定光标与键盘的距离												| Number				| 0			| -			|
| cursor				| 指定focus时的光标位置												| Number &#124; String	| -			| -			|
| showConfirmBar		| 是否显示键盘上方带有”完成“按钮那一栏，								| Boolean				| true		| false		|
| selectionStart		| 光标起始位置，自动聚焦时有效，需与selection-end搭配使用				| Number				| -1		| -			|
| selectionEnd			| 光标结束位置，自动聚焦时有效，需与selection-start搭配使用				| Number				| -1		| -			|
| adjustPosition		| 键盘弹起时，是否自动上推页面											| Boolean				| true		| false		|
| disableDefaultPadding	| 是否去掉 iOS 下的默认内边距，只微信小程序有效							| Boolean				| false		| true		|
| holdKeyboard			| focus时，点击页面的时候不收起键盘，只微信小程序有效					| Boolean				| false		| true		|
| maxlength				| 最大输入长度，设置为 -1 的时候不限制最大长度							| String &#124; Number	| 140		| -			|
| border				| 边框类型，surround-四周边框，none-无边框，bottom-底部边框															| String				| surround	| bottom	|
| placeholderClass		| 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/																| String				| textarea-placeholder	| -														|
| placeholderStyle		| 指定placeholder的样式，字符串/对象形式，如"color: red;"																					| String &#124; Object	| color: #c0c4cc	| -														|


### List Events

|事件名					|说明																		|回调参数		|
|:-						|:-																			|:-				|
| focus					| 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度			| e				|
| blur					| 输入框失去焦点时触发，event.detail = {value, cursor}							| e				|
| linechange			| 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}	| e				|
| input					| 当键盘输入时，触发 input 事件												| e.detail.value|
| confirm				| 点击完成时， 触发 confirm 事件												| e				|
| keyboardheightchange	| 键盘高度发生变化的时候触发此事件												| e				|
