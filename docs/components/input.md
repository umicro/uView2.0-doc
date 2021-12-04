## Input 输入框 <to-api/>

<demo-model url="/pages/componentsC/input/input"></demo-model>

去除`fixed`、`showWordLimit`、`showConfirmBar`、`disableDefaultPadding`、`autosize`字段


此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件[u-form](/components/form.html)而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。  

**注意：** 当您仅是需要一个输入框的话，可以考虑使用[u-field](/components/field.html)组件，而如果是一个表单组，比如有多个输入框一起，且需要验证功能的时候，
应该在`u-form`中嵌套`u-form-item`，再嵌套`u-input`去实现。


::: danger 注意：
由于在`nvue`下，`u-input`名称被uni-app官方占用，在`nvue`页面中请使用`u--input`名称，在`vue`页面中使用`u--input`或者`u-input`均可。
:::


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|


### 基本使用

- 通过`type`设置输入框的类型，默认text
- 通过`placeholder`设置输入框为空时的占位符
- 通过`border`配置是否显示输入框的边框
- 绑定`@change`事件

```html
<template>
  <u--input
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
  ></u--input>
</template>

<script>
	export default {
      data() {
        return {
          value: ''
        }
      },
      methods: {
        change(e) {
          console.log('change', e);
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


#### 可清空字符

将`clearable`设置为`true`，会在输入框后方增加一个清空按钮。

```html
<template>
  <u--input
    placeholder="请输入内容"
    border="surround"
    clearable
  ></u--input>
</template>
```


#### 下划线

通过设置属性`border`为`bottom`即可变成一个下划线

```html
<template>
  <u--input
    placeholder="请输入内容"
    border="bottom"
    clearable
  ></u--input>
</template>
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


### 前后插槽

通过设置`slot`为`prefix`或`suffix`来指定前后插槽

```html
<template>
	<view class="u-demo-block">
		<text class="u-demo-block__title">前后插槽</text>
		<view class="u-demo-block__content">
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input placeholder="前置插槽">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input placeholder="前置插槽">
			<!-- #endif -->
				<u--text
					text="http://"
					slot="prefix"
					margin="0 3px 0 0"
					type="tips"
				></u--text>
			<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>
		<view
			class="u-demo-block__content"
			style="margin-top: 15px;"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input placeholder="后置插槽">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input placeholder="后置插槽">
			<!-- #endif -->
				<template slot="suffix">
					<u-code
						ref="uCode"
						@change="codeChange"
						seconds="20"
						changeText="X秒重新获取哈哈哈"
					></u-code>
					<u-button
						@tap="getCode"
						:text="tips"
						type="success"
						size="mini"
					></u-button>
				</template>
			<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
  export default {
    data() {
      return {
        tips: '',
        value: ''
      }
    },
    watch: {
      value(newValue, oldValue) {
        // console.log('v-model', newValue);
      }
    },
    methods: {
      codeChange(text) {
        this.tips = text;
      },
      getCode() {
        if (this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading();
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            this.$refs.uCode.start();
          }, 2000);
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      },
      change(e) {
        console.log('change', e);
      }
    }
  }
</script>
```


### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/input/input.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/input/input.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

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
| placeholderStyle		| 指定placeholder的样式，字符串/对象形式，如"color: red;"																					| String &#124; Object	| color: #c0c4cc	| -														|
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
| color					| 输入框字体颜色																																| String				| #303133			| -														|
| prefixIcon			| 输入框前置图标																																| String				| -					| -														|
| prefixIconStyle		| 前置图标样式，对象或字符串																													| String &#124; Object	| -					| -														|
| suffixIcon			| 输入框后置图标																																| String				| -					| -														|
| suffixIconStyle		| 后置图标样式，对象或字符串																													| String &#124; Object	| -					| -														|
| border				| 边框类型，surround-四周边框，bottom-底部边框，none-无边框																						| String				| surround			| bottom &#124; none									|
| readonly				| 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会																			| Boolean				| false				| true													|
| shape					| 输入框形状，circle-圆形，square-方形																											| String				| square			| circle												|
| formatter			    | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法)					| Function				| null				| -														|		



### Events

|事件名	|说明					|回调参数			|版本	|
|:-		|:-						|:-					|:-		|
| blur| 输入框失去焦点时触发	| event: input默认参数，event.detail.value获取内容	| -		|
| focus| 输入框聚焦时触发	|-	| -		|
| confirm| 点击完成按钮时触发	| value：内容值  | -		|
| keyboardheightchange| 键盘高度发生变化的时候触发此事件	| -	| 微信小程序2.7.0+、App 3.1.0+	|
| input| 内容发生变化触发此事件	| value：内容值	| -	|
| change| 内容发生变化触发此事件	|  value：内容值	| -	|
| clear| 点击清空内容	|  -	| -	|


### Methods
| 方法名								| 说明					| 
| :-								| :-					|
| setFormatter	| 为兼容微信小程序而暴露的内部方法，见上方说明	 |


### Slots

| 名称          | 说明            |
|-------------  |---------------- |
| prefix | 输入框前置内容，`nuve`环境需`u--input`有效，非`nvue`环境需`u-input`才有效  |
| suffix | 输入框后置内容，`nuve`环境需`u--input`有效，非`nvue`环境需`u-input`才有效  |



<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 35%;
}

h3[id=methods] + table thead tr th:nth-child(2) {
	width: 60%;
}

h3[id=slots] + table thead tr th:nth-child(2) {
	width: 60%;
}
</style>
